// Faça um programa que leia um valor n, inteiro e positivo, calcule e mostre a seguinte soma: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n.

/*
const n = 5
let x = 1
let soma = 0


while (x < n) {
    x++
    soma = soma + 1/x
}
console.log(soma)
*/

const n = 5
soma = 0

for (let x = 1; x <= n; x++){
    soma = soma + 1/x
}
console.log(soma)