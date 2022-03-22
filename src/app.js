import {openDb} from './configDB.js';

//Importando express//
import express from 'express';
const app = express();
app.use(express.json());

import controllerFornecedores from './controller/controller-fornecedores.js';
controllerFornecedores(app, openDb)

export default app


