import { Injectable } from '@nestjs/common';
import knex from 'knex';
import type { OnModuleInit } from '@nestjs/common';
import type { Knex } from 'knex';

@Injectable()
export class ExpService implements OnModuleInit {
  private db: Knex;
  private static readonly TABLE_NAME = 'queries';

  constructor() {
    this.db = knex({
      client: 'sqlite3',
      connection: {
        filename: './mydb.sqlite',
      },
    });
  }

  async onModuleInit() {
    if (!(await this.db.schema.hasTable(ExpService.TABLE_NAME))) {
      await this.db.schema.createTable(ExpService.TABLE_NAME, function (table) {
        table.increments().primary();

        table.text('stack');
        table.text('query');
        table.text('explain');

        table.timestamps();
      });
    }
  }

  async insert({
    stack,
    query,
    explain,
  }: {
    stack: string;
    query: string;
    explain: any;
  }): Promise<void> {
    await this.db(ExpService.TABLE_NAME).insert({
      stack,
      query,
      explain:
        typeof explain === 'string'
          ? explain
          : JSON.stringify(explain, null, 2),
    });
  }
}
