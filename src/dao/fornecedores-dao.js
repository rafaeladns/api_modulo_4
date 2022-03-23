import { openDb } from "../configDB.js";

export async function getFornecedores() { 
  const db = await openDb()
  const result = await db.all("SELECT * FROM fornecedores;")
  return result
}

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
export async function updateFornecedores(fornecedores,id){
    openDb().then(db =>{
      const listaDados = [fornecedores.nome, fornecedores.endereco, fornecedores.cnpj, fornecedores.telefone]
      db.run('UPDATE fornecedores SET nome=?, endereco=?, cnpj=?, telefone=? WHERE id=?;', listaDados[0],listaDados[1], listaDados[2],listaDados[3],id)
    })
}

//Delete/
export async function deleteFornecedores(id){
  openDb().then(db =>{
    db.run('DELETE FROM Fornecedores WHERE id=?;', id)
  })
}
