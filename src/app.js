//Importando express//
const express = require('express');
const app = express();

//criando rota para o app//
app.get('/', function(req, res){ //requisicao e resposta//
  res.send('Olá mundo!')
})

//Porta em que a aplicação estará rodando//
app.listen(5000, ()=> console.log("Api rodando"))
