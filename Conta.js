
class Conta{
    constructor(saldo, senha, agencia, numero_conta, titular){
    this.saldo = saldo
    this.senha = senha
    this.agencia = agencia
    this.numero_conta = numero_conta
    this.titular = titular
  }
 
  autenticar(agencia, numero_conta, senha){
      
  }
 
  transferir(){
 
  }
 
  saque(valor){
 
  }
 
  depositar(valor){
 
  }
 
  investir(contaOrigem, contaDestino){
 
  }
 
  visualizarSaldo(){
 
  }
 
  cobrarTaxa(){
 
  }
 
}


function pagarContas(titulares){
  let c1 = new Conta(500, 1234, 543, 2589, titulares[0])
  let c2 = new Conta(500, 1234, 543, 2589, titulares[1])
  let c3 = new Conta(500, 1234, 543, 2589, titulares[2])
  let contas = [c1, c2, c3]
  return contas
}


 
export {Conta, pagarContas}