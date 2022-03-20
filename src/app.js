// import {openDb} from './configDB.js';
import {createTable, insertFornecedores, updateFornecedores, deleteFornecedores} from './controller/Fornecedores.js';

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

//criando put//
//Verificando se tem body e se não tiver campo nome adicionar//
app.put('/fornecedores', function(req, res){
  if(req.body && !req.body.nome){
    res.json({
      "statusCode": 400,
      "msg":"Você precisa informar um nome"
    })
  }else{
    updateFornecedores(req.body)
    res.json({
      "statusCode": 200
    })
  }
})

app.delete('/fornecedores/id/:id', function(req, res){
  const id = req.params.id;
  if(id){
    deleteFornecedores(id)
    res.json({
      "msg": "Usuário deletado com sucesso!"
    })
  }
})

//Porta em que a aplicação estará rodando//
app.listen(5000, ()=> console.log("Api rodando"));


