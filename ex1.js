// Faça um programa que receba um número e usando laços de repetição calcule e mostre a tabuada desse número.

const x = 2
let y = 0
let produto

while (y <= 10) {
    produto = x * y
    console.log(`${x} x ${y} = ${produto}`)
    y++
}