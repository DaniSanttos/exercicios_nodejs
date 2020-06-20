// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

console.log("Seja bem-vindo(a) a Daniel's Airlines\n")

let voo = rs.question(console.log("Qual o número do seu vôo?"))
let fileira = rs.question(console.log("Qual é a sua fileira?"))

console.log("Seu vôo é o " + voo + " e sua fileira é a " + fileira.toUpperCase())