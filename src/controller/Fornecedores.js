import { openDb } from "../configDB.js";

export async function createTable(){
  openDb().then(db =>{
    db.exec('CREATE TABLE IF NOT EXISTS Fornecedores (id INTEGER PRIMARY KEY, nome TEXT, endereco TEXT, cnpj INTEGER, email TEXT, telefone TEXT)')
  })
}

export async function insertFornecedores(fornecedores){
  openDb().then(db =>{
    db.run('INSERT INTO Fornecedores(nome, cnpj, endereco)VALUES (?,?)'), [fornecedores.nome, fornecedores.endereco, fornecedores.cnpj, fornecedores.email, fornecedores.telefone]
  });
}