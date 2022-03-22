<h1 align="center"> Projeto Módulo IV- Resilia</h1>

<h1 align="center">Loja de Informática 💻 - API Rest</h1>

### Sobre a API

Criação de API REST que traz informações sobre os referente aos fornecedores de uma estúdio de loja de informática, foi utilizado os verbos HTTP seguindo o padrão REST e contendo as operações CRUD.

---
### Pré-requisitos 

Para executar o projeto você precisará ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor de código para trabalhar com o código. O editor usado neste trabalho foi o [VSCode](https://code.visualstudio.com/).

---
### Rodando a aplicação no Back End

```bash
# Clone este repositório
$ git clone <https://github.com/rafaeladns/api_modulo_4>

# Acesse a pasta do projeto no terminal/cmd
$ cd api_modulo_4

# Instale as dependências
$ npm install
$ npm install express
$ npm install nodemon
$npm install sqlite3

# Execute a aplicação através do comando
$ npm run dev

# O servidor inciará na porta:5000 - acesse <http://localhost:5000>
```

---
### Tecnologias neste projeto

As seguintes ferramentas foram usadas na construção do projeto:

*Bibliotecas*
- [Nodemon](https://nodemon.io/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Cors](https://www.npmjs.com/package/cors)

*Framework* 
- [Express](https://expressjs.com/pt-br/)

*Banco de dados*
- [SQLite3](https://www.npmjs.com/package/sqlite3)

---
### Testes 

---
### Rotas
 ### GET - /
 
    Schema da resposta
    ```[
	{
		"id": 3,
		"nome": "Bugfree",
		"endereco": "Rua Pereira 3543 Santa Luzia Autazes Amazonas",
		"cnpj": 93586011000186,
		"telefone": "092 54532343"
	}

 ### POST - /fornecedores
 ```sh
 Schema da requisição
  {
	"nome": "Cloud Tecnologia",
	"endereco": "Alameda dos Judiciários 3000 Cabral São Paulo SP",
	"cnpj": 29716093000137,
	"telefone": "031 25678876"
}

Schema da resposta
{
	"statusCode": 200
}
```

 ### PUT /fornecedores

  ```sh
 Schema da requisição
{
	"nome": "Oi",
	"endereco": "Alameda dos Judiciários 500 Cabral São Paulo SP",
	"cnpj": 297168778783000137,
	"telefone": "031 0000"
}

Schema resposta
{
	"statusCode": 200
}
 ```
---
### Contato

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rafaelasousa/)](https://www.linkedin.com/in/cardosofvanessa/) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-red?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rafaeladiasneves95@gmail.com)](mailto:rafaeladiasneves95@gmail.com) 
[![Instagram Badge](https://img.shields.io/badge/-Instagram-violet?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/rafaeladns/)](https://www.instagram.com/rafaeladns/)

<p><strong>Feito por Rafaela Dias 🎗️</p>
