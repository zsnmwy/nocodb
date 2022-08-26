import cors from 'cors';
import express from 'express';
import pkg from 'nocodb';
const { Noco } = pkg;

import { handler  } from '../src/lib/gui/server/index.mjs';


process.env.NC_VERSION = '0009044';
process.env.NUXT_APP_BASE_URL = '/abc/';

const server = express();
server.enable('trust proxy');
server.disable('etag');
server.disable('x-powered-by');
server.use(
  cors({
    exposedHeaders: 'xc-db-response',
  })
);

server.set('view engine', 'ejs');


(async () => {
  const httpServer = server.listen(process.env.PORT || 8080, () => {
    console.log(`App started successfully.\nVisit -> ${Noco.dashboardUrl}`);
  });
  server.use('/abc', handler)
  server.use(await Noco.init({}, httpServer, server));
})().catch((e) => console.log(e));


