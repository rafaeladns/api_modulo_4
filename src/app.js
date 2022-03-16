// import {openDb} from './configDB.js';
import {createTable, insertFornecedores} from './controller/Fornecedores.js';

//Importando express//
import express from 'express';
const app = express();
app.use(express.json());

createTable();
//criando rota para o app//
app.get('/', function(req, res){ //requisicao e resposta//
  res.send('Olá mundo!')
});

//criando rota post//
app.post('/fornecedores', function(req, res){
  insertFornecedores(req.body);
  res.json({
    "statusCode":200
  })
});

//Porta em que a aplicação estará rodando//
app.listen(5000, ()=> console.log("Api rodando"))
