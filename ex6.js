// Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000).  Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.

const cliente1 = 60000
const cliente2 = 200
const cliente3 = 200
const cliente4 = 200
const cliente5 = 200
let faturamento = cliente1 + cliente2 + cliente3 + cliente4 + cliente5

if (faturamento >= 54000) {
    console.log(`Faturamento superado: R$${faturamento}`)
} else {
    console.log(`Faturamento não superado: R$${faturamento}`)
}