// ## Importe a biblioteca ##



// ## Faça o código ##
let rs = require("readline-sync")

let ask = rs.question("Informe o tamanho de um dos lados do quadrado em cm: ")

let area = (ask * ask)

console.log("A área do seu quadrado é de " + area +"cm²")