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
    res.json(contas)
})

app.listen(3000)
 
console.log(contas)