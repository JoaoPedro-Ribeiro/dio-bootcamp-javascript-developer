// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

function calculateNewProductValue(productValue, paymentType){
  if (paymentType === "Debt"){
    console.log(productValue * 0.9);
  } else  if (paymentType === "InCash"){
    console.log(productValue * 0.85);
  } else if (paymentType === "TwoInstallments"){
    console.log(productValue);
  } else {
    console.log(productValue * 1.1);
  }
}

(function(){
  const productValue = 100;
  const paymentType = "InCash" //Debt, InCash, TwoInstallments and MoreThanTwoInstallments

  calculateNewProductValue(productValue, paymentType);
})();