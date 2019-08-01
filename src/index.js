import './env';
// import fs from 'fs';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import json from './middlewares/json';
import logger, { logStream } from './utils/logger';
import { authenticate } from './middlewares/authentication';
import * as errorHandler from './middlewares/errorHandler';

const routes = require('./routes');
const app = express();

const APP_PORT =
  (process.env.NODE_ENV === 'test' ? process.env.TEST_APP_PORT : process.env.APP_PORT) || process.env.PORT || '3000';

const APP_HOST = process.env.APP_HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.use(favicon(path.join(__dirname, '/../public', 'favicon.ico')));

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler.bodyParser);
app.use(compression());
app.use(morgan('tiny', { stream: logStream }));
app.use(json);
app.use(authenticate);
app.use('/api', routes);

app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

app.listen(app.get('port'), app.get('host'), () => {
  logger.info(`Server started at http://${app.get('host')}:${app.get('port')}/api`);
});

export default app;
