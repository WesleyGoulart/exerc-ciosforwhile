/* Uma loja tem tem uma política de descontos de acordo com o valor da compra do cliente. Os descontos começam acima dos R$500. A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%. 

 Por exemplo: R$500 = 1% || R$600,00 = 2% … etc…

 Faça um programa que exiba essa tabela de descontos no seguinte formato:  

 Valordacompra – porcentagem de desconto – valor final
*/

/*
let porcentagemDesconto = 1
let valorDaCompra = 500

while (porcentagemDesconto <= 25) {
    let valorFinal = valorDaCompra - (valorDaCompra * (porcentagemDesconto / 100))     
    console.log(`Valor da compra: R$${valorDaCompra} - Porcentagem do desconto: ${porcentagemDesconto}% - Valor Final: ${valorFinal}`)
    valorDaCompra = valorDaCompra + 100
    porcentagemDesconto++
}
*/

let valorDaCompra = 500
let porcentagemDesconto = 1

for (porcentagemDesconto = 1; porcentagemDesconto <=25; porcentagemDesconto++) {
    let valorFinal = valorDaCompra - (valorDaCompra * (porcentagemDesconto / 100))     
    console.log(`Valor da compra: R$${valorDaCompra} - Porcentagem do desconto: ${porcentagemDesconto}% - Valor Final: ${valorFinal}`)
    valorDaCompra = valorDaCompra + 100
}