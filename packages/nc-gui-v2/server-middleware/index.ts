// import cors from 'cors';
import express from 'express'

import pkg from 'nocodb'

process.env.NC_VERSION = '0009044'

const server = express()
server.enable('trust proxy')
server.disable('etag')
server.disable('x-powered-by')

server.set('view engine', 'ejs')

const date = new Date()
const metaDb = `meta_v2_${date.getFullYear()}_${(date.getMonth() + 1)
  .toString()
  .padStart(2, '0')}_${date.getDate().toString().padStart(2, '0')}`

process.env[`NC_DB`] = `mysql2://localhost:3306?u=root&p=password&d=${metaDb}`;

(async () => {
  if (process.client) {

    const httpServer = server.listen(process.env.PORT || 8080, () => {
      console.log(`App started successfully.\nVisit -> ${pkg.Noco.dashboardUrl}`)
    })
    server.use(await pkg.Noco.init({}, httpServer, server))
  }
})().catch((e) => console.log(e))

export default server
