// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const productValue = 100;
const paymentType = "InCash" //Debt, InCash, TwoInstallments and MoreThanTwoInstallments
let newProductValue;

if (paymentType === "Debt"){
  newProductValue = productValue * 0.9;
} else  if (paymentType === "InCash"){
  newProductValue = productValue * 0.85;
} else if (paymentType === "TwoInstallments"){
  newProductValue = productValue;
} else {
  newProductValue = productValue * 1.1;
}

console.log(`De acordo com o metodo de pagamento escolhido o valor final a ser pago pelo produto é de: ${newProductValue} reais.`);