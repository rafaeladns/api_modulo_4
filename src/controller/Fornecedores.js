import { openDb } from "../configDB.js";

export async function createTable(){
  openDb().then(db =>{
    db.exec('CREATE TABLE IF NOT EXISTS Fornecedores (id INTEGER PRIMARY KEY, nome TEXT, endereco TEXT, cnpj INTEGER, telefone TEXT)')
  });
}

export async function insertFornecedores(fornecedores){
  openDb().then(db =>{
    const listaDados = [fornecedores.nome, fornecedores.endereco, fornecedores.cnpj, fornecedores.telefone]
    
    db.run('INSERT INTO  fornecedores (nome,endereco,cnpj,telefone) VALUES (?,?,?,?)', listaDados )
 });
}

