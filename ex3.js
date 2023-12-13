// Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, quando divididos por 11 produzam resto igual a 2.

/*
let x = 1000
const y = 2000
let resto2

while (x <= y) {
    resto2 = x % 11
    if (resto2 == 2) {
        console.log(x)
    }
    x++
}
*/


for (let x = 1000; x <= 2000; x++) {
    let resto2
    resto2 = x % 11
    if (resto2 == 2) {
        console.log(x)
    }
}