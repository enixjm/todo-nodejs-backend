import { Express } from 'express';
import express from 'express';
import * as api from '../controller/apis'; 

const router: Express = express();

router.get('/read', api.read);
router.post('/create', api.create);
router.put('/update', api.update);
router.delete('/delete/:id', api.deleteTask);

export default router;