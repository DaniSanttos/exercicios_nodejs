// ## Importe a biblioteca ##



// ## Faça o código ##
let rs = require("readline-sync")
let per1 = rs.question(console.log("Você usa mascara ao sair de casa? s/n"))
let per2 = rs.question(console.log("Você lava as mãos frequentemente? s/n"))

if (per1 == "s" && per2 == "s") { 
    console.log("Parabéns você esta seguindo todas as regras.")
}else{
    console.log("Você é péssimo, precisa se cuidar viu!")
}