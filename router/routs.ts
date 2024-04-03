import { Express } from 'express';
import express from 'express';
import * as api from '../controller/apis'; 

const routs: Express = express();

routs.get('/read', api.read);
routs.post('/create', api.create);
routs.put('/update', api.update);
routs.delete('/delete/:id', api.deleteTask);

module.exports = routs;