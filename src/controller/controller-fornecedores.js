import {createTable, insertFornecedores, updateFornecedores, deleteFornecedores, getFornecedores} from '../dao/fornecedores-dao.js';
import Fornecedores from '../model/fornecedores-model.js';
createTable();

//criando rota para o app//
const controllerFornecedores = (app, database) =>{
  app.get('/', async function(req, res){ //requisicao e resposta//
    
    res.json(await getFornecedores());
  });
  
  //criando rota post//
  app.post('/fornecedores', function(req, res){
    const body = req.body;
    const validandoInformacoes = new Fornecedores(body.nome, body.endereco, body.cnpj, body.telefone);
    insertFornecedores(validandoInformacoes);
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
}

export default controllerFornecedores;