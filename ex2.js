// Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição.

let x = 0
let y = 1
let produto

while (y <= 10) {
    while (x <= 10) {
        produto = x * y
        console.log(produto)
        x++
    }
y++
}


