// ## Importe a biblioteca ##



// ## Faça o código ##
let rs = require("readline-sync")

let user1 = rs.question("Qual o nome do usuario 1? ")
let caruser1 = user1.length
console.log ("O nome do usuario 1 tem " + caruser1 + " caracteres\n")

let user2 = rs.question("Qual o nome do usuário 2? ")
let caruser2 = user2.length
console.log ("O nome do usuario 2 tem " + caruser2 + " caracteres.\n")

if (user1 > user2){
    console.log ("O nome do usuário 1 contém mais caracteres.")
}else {
    console.log ("O nome do usuário 2 contem mais caracteres.")
}