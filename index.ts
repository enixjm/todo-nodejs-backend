import dotenv from 'dotenv';
dotenv.config();
const { POSTGRE_USER, POSTGRE_HOST, POSTGRE_DATABASE, POSTGRE_PASSWORD, POSTGRE_PORT } = process.env;

import { Express } from 'express';
import express from 'express';
import cors from 'cors';

import routs from './router/routs'

const app: Express = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routs);
app.use('/api', express.static(__dirname + '/doc'));

app.listen(POSTGRE_PORT, () => {
  console.log(`Example app listening at http://localhost:${POSTGRE_PORT}`);
});
