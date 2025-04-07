import { Titular, buscarTitulares } from "./model/Titular.js";
import { Conta} from "./model/Conta.js"
import express from 'express'


const app = express()

let titulares = buscarTitulares()
 
let c1 = new Conta(500, 1234, 546, 2344, titulares[0])
let c2 = new Conta(500, 1234, 546, 2344, titulares[0])
let c3 = new Conta(500, 1234, 546, 2344, titulares[0])
 
let contas = [c1, c2, c3]

app.get('/',function(req, res){
    let titulares = buscarTitulares()
    let contas = pagarContas(titulares)
    res.json(contas)

})

app.get('/autenticar/:agencia/:numero/:senha', function (req, res){
    let agencia = parseInt(req.params.agencia)
    let numero = parseInt(req.params.numero)
    let senha = parseInt(req.params.senha)
    res.json({agencia, numero, senha})

    let titulares = buscarTitulares()
    let contas = pegarContas(titulares)
    
    contas.forEach((conta) =>{
        console.log("")


    })


})

app.listen(3000)
 
console.log(contas)