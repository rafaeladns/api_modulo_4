class Fornecedores {
  constructor(nome, endereco, cnpj, telefone){
    this.nome = nome;
    this.endereco = endereco;
    this.cnpj = cnpj;
    this.telefone = telefone;
  }
  _validandoInformacoes(informacao){
    if(String(informacao).length <= 0){
      throw new Error ("Informação inválida!");
    }else{
      return informacao;
    }
  }
}

export default Fornecedores;