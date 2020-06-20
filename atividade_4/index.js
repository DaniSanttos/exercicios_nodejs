// ## Importe a biblioteca ##



// ## Faça o código ##
let rs = require("readline-sync")

console.log("Responda apensa com números!")

let dia = rs.question(console.log("Em que dia você nasceu? "))
let mes = rs.question(console.log("Em que mês você nasceu? "))
//let ano = rs.question("em que ano você nasceu? ")

if (dia >= 21 && mes == 03) {
    console.log("Com base na sua data de nascimento, seu signo é de Áries.")
}else if (dia <= 20 && mes == 04) {
    console.log ("Com base na sua data de nascimento, seu signo é de Áries.")
}else if (dia >= 21 && mes == 04) {
    console.log("Com base na sua data de nascimento, seu signo é de Touro.")
}else if (dia <= 20 && mes == 05) {
    console.log("Com base na sua data de nascimento, seu signo é de Touro.")
}else if (dia >= 21 && mes == 05) {
    console.log("Com base na sua data de nascimento, seu signo é de Gêmeos.")
}else if (dia <= 20 && mes == 06) {
    console.log("Com base na sua data de nascimento, seu signo é de Gêmeos.")
}else if (dia >= 21 && mes == 06) {
    console.log("Com base na sua data de nascimento, seu signo é de Câncer.")
}else if (dia <= 22 && mes == 07) {
    console.log("Com base na sua data de nascimento, seu signo é de Câncer.")
}else if (dia >= 23 && mes == 07) {
    console.log("Com base na sua data de nascimento, seu signo é de Leão.")
}else if (dia <= 22 && mes == 08) {
    console.log("Com base na sua data de nascimento, seu signo é de Leão.")
}else if (dia >= 23 && mes == 08) {
    console.log("Com base na sua data de nascimento, seu signo é de Virgem.")
}else if (dia <= 22 && mes == 09) {
    console.log("Com base na sua data de nascimento, seu signo é de Virgem.")
}else if (dia >= 23 && mes == 09) {
    console.log("Com base na sua data de nascimento, seu signo é de Libra.")
}else if (dia <= 22 && mes == 10) {
    console.log("Com base na sua data de nascimento, seu signo é de Libra.")
}else if (dia >= 23 && mes == 10) {
    console.log("Com base na sua data de nascimento, seu signo é de Escorpião.")
}else if (dia <= 21 && mes == 11) {
    console.log("Com base na sua data de nascimento, seu signo é de Escorpião.")
}else if (dia >= 22 && mes == 11) {
    console.log("Com base na sua data de nascimento, seu signo é de Sagitário.")
}else if (dia <= 21 && mes == 12) {
    console.log("Com base na sua data de nascimento, seu signo é de Sagitário.")
}else if (dia >= 22 && mes == 12) {
    console.log("Com base na sua data de nascimento, seu signo é de Capricórnio.")
}else if (dia <= 20 && mes == 01) {
    console.log("Com base na sua data de nascimento, seu signo é de Capricórnio.")
}else if (dia >= 21 && mes == 01) {
    console.log("Com base na sua data de nascimento, seu signo é de Aquário.")
}else if (dia <= 18 && mes == 02) {
    console.log("Com base na sua data de nascimento, seu signo é de Aquário.")
}else if (dia >= 19 && mes == 03) {
    console.log("Com base na sua data de nascimento, seu signo é de Peixes.")
}else {
    console.log("Com base na sua data de nascimento, seu signo é de Peixes.")
}