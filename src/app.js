/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
/* eslint-disable space-before-blocks */
import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }

  // eslint-disable-next-line space-before-blocks
  routes(){
    this.server.use(routes);
  }
}

// eslint-disable-next-line eol-last
export default new App().server;