import { Knex } from 'knex';

class KnexLock {
  private knex: Knex;
  private table;

  constructor(knexConnection: Knex, lockTable = 'migrations_lock') {
    this.knex = knexConnection;
    this.table = lockTable;
  }

  // private async createDatabaseIfNotExists(databaseName: string): Promise<void> {
  //   await this.knex.raw(`CREATE DATABASE IF NOT EXISTS ${databaseName}`);
  // }

  private async createLockTableIfNotExists(): Promise<void> {
    await this.knex.schema.createTableIfNotExists(this.table, (table) => {
      table
        .boolean('is_locked')
        .defaultTo(false)
      table.increments('id').primary()
    });
  }

  private async updateLockStatus(isLocked: number): Promise<void> {
    await this.knex(this.table).delete();
  }

  public async acquireLock(): Promise<void> {
    // await this.createDatabaseIfNotExists(this.knex.client.config.connection.database);
    await this.createLockTableIfNotExists();

    const isLockAcquired = await this.isLockAcquired();
    if (!isLockAcquired) {
      await this.knex(this.table).insert({ is_locked: 1 });
    } else {
      throw new Error('Lock is already acquired by another process.');
    }
  }

  public async releaseLock(): Promise<void> {
    await this.updateLockStatus(0);
  }

  public async isLockAcquired(): Promise<boolean> {
    const rowCount = await this.knex(this.table).count().first();
    const count = rowCount ? rowCount.count : 0;

    if (count === 0) {
      // No entry in the lock table, lock is not acquired
      return false;
    }

    const lockResult = await this.knex(this.table).select('is_locked').first();
    return lockResult ? lockResult.is_locked === 1 : false;
  }

  public async executeWithLock(
    callback: () => Promise<void>,
    maxWaitTime: number,
    pollInterval = 1000,
  ): Promise<void> {
    // await this.createDatabaseIfNotExists(this.knex.client.config.connection.database);
    await this.createLockTableIfNotExists();

    const startTime = Date.now();

    while (await this.isLockAcquired()) {
      if (Date.now() - startTime > maxWaitTime) {
        throw new Error('Lock acquisition timeout exceeded.');
      }
      await new Promise((resolve) => setTimeout(resolve, pollInterval));
    }

    await this.acquireLock();

    try {
      await callback();
      await this.releaseLock();
    } catch (e) {
      await this.releaseLock();
      throw e;
    }
  }
}

export default KnexLock;
