<h1 align="center"> Projeto Módulo IV- Resilia</h1>

<h1 align="center">Loja de Informática 💻 - API Rest</h1>

### Sobre a API

Criação de API REST que traz informações sobre os referente aos fornecedores de uma loja de informática. <br>
Foram utilizados os verbos HTTP seguindo o padrão REST e operações CRUD.

---
### Pré-requisitos 

Para executar o projeto você precisará ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor de código para trabalhar com o código. O editor usado neste trabalho foi o [VSCode](https://code.visualstudio.com/).

---
### Rodando a aplicação no Back End

```bash
# Clone este repositório
$ git clone https://github.com/rafaeladns/api_modulo_4

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
### Tecnologias utilizadas neste projeto

As seguintes ferramentas foram usadas na construção do projeto:

*Bibliotecas*
- [Nodemon](https://nodemon.io/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)

*Framework* 
- [Express](https://expressjs.com/pt-br/)

*Banco de dados*
- [SQLite3](https://www.npmjs.com/package/sqlite3)

---
### Testes 
- Para rodar o teste implementado execute npm run test
---
### Rotas
* **GET /**
 
    Schema da resposta
    ```
    http://localhost:5000
    [
	{
		"id": 4,
		"nome": "Phillips",
		"endereco": "Rua Doutor José de Almeida Villas Boas 34 Portal D'Oeste Osasco São Paulo",
		"cnpj": 19906227000129,
		"telefone": "011 33332222"
	}
    ]
 ### POST - /fornecedores
 ```sh
 http://localhost:5000/fornecedores
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

 ### PUT /fornecedores/id/:id

  ```sh
  http://localhost:5000/fornecedores/id/21
 Schema da requisição
{
	"nome": "XGamer",
	"endereco": "Rua Lagoa dos Ingleses, 500, Centro, Belo Horizonte- MG",
	"cnpj": 297445448778783000138,
	"telefone": "31 26768965"
}

Schema resposta
{
	"statusCode": 200,
	"msg": "Dados alterados com sucesso!"
}
 ```
 
  ### DELETE /fornecedores/id/:id

  ```sh
  http://localhost:5000/fornecedores/id/21
 Schema da requisição
{
	"nome": "XGamer",
	"endereco": "Rua Lagoa dos Ingleses, 500, Centro, Belo Horizonte- MG",
	"cnpj": 297445448778783000138,
	"telefone": "31 26768965"
}

Schema resposta
{
	"msg": "Usuário deletado com sucesso!"
}
 ```
---
### Contato

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rafaelasousa/)](https://www.linkedin.com/in/rafaelasousa/) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-red?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rafaeladiasneves95@gmail.com)](mailto:rafaeladiasneves95@gmail.com) 
[![Instagram Badge](https://img.shields.io/badge/-Instagram-violet?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/rafaeladns/)](https://www.instagram.com/rafaeladns/)

<p><strong>Feito por Rafaela Dias 🎗️</p>
