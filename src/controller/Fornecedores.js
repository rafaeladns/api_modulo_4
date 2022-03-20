import { openDb } from "../configDB.js";

export async function createTable(){
  openDb().then(db =>{
    db.exec('CREATE TABLE IF NOT EXISTS Fornecedores (id INTEGER PRIMARY KEY, nome TEXT, endereco TEXT, cnpj INTEGER, telefone TEXT)')
  });
}

//Inserindo//
export async function insertFornecedores(fornecedores){
  openDb().then(db =>{
    const listaDados = [fornecedores.nome, fornecedores.endereco, fornecedores.cnpj, fornecedores.telefone]
    
    db.run('INSERT INTO  fornecedores (nome,endereco,cnpj,telefone) VALUES (?,?,?,?)', listaDados )
 });
}

//Update//
export async function updateFornecedores(fornecedores){
    openDb().then(db =>{
      const listaDados = [fornecedores.nome, fornecedores.endereco, fornecedores.cnpj, fornecedores.telefone]
      db.run('UPDATE fornecedores SET nome=? WHERE id=1;', listaDados[0])
    })
}

//Delete/
export async function deleteFornecedores(id){
  openDb().then(db =>{
    db.run('DELETE FROM  Fornecedores WHERE id=?;', id)
  })
}