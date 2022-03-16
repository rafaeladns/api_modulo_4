//Importando express//
const express = require('express');
const app = express();
app.use(express.json());

//criando rota para o app//
app.get('/', function(req, res){ //requisicao e resposta//
  res.send('Olá mundo!')
});

//criando rota post//
app.post('/fornecedores', function(req, res){
  console.log(req.body);
  res.json({
    "statusCode":200
  })
});

//Porta em que a aplicação estará rodando//
app.listen(5000, ()=> console.log("Api rodando"))
