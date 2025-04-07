class Titular {
    constructor (nome, cpf, endereco, telefone, email, dataNasc){
        this.nome = nome
        this.nome = cpf
        this.nome = endereco
        this.nome = telefone
        this.nome = email
        this.dataNasc = dataNasc
    }
}
function buscarTitulares() {
    let titular1 = new Titular('João Quebrado', '440938328-03', 'Rua Feira Fiel', '11-9999', 'joao@gmail.com', '22.12.22')
    let titular2 = new Titular( 'Helena Quebrado', '440938328-03', 'Rua Feira Fiel', '11-9999', 'joao@gmail.com', '22.12.22')
    let titular3 = new Titular('Maria Quebrado', '440938328-03', 'Rua Feira Fiel', '11-9999', 'joao@gmail.com', '22.12.22')
    let titulares = [titular1, titular2, titular3]
    return titulares
}

function pegarContas() {
    let titular1 = new Titular('João Quebrado', '440938328-03', 'Rua Feira Fiel', '11-9999', 'joao@gmail.com', '22.12.22')
    let titular2 = new Titular( 'Helena Quebrado', '440938328-03', 'Rua Feira Fiel', '11-9999', 'joao@gmail.com', '22.12.22')
    let titular3 = new Titular('Maria Quebrado', '440938328-03', 'Rua Feira Fiel', '11-9999', 'joao@gmail.com', '22.12.22')
    let titulares = [titular1, titular2, titular3]
    return titulares
}
 
export {Titular, buscarTitulares, pegarContas}