// 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

// Formula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos Condição:
// - Abaixo de 18.5 Abaixo do peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obesidade Grave;

const personWeight = 100;
const personHeight = 1.80;
const bmiValue = personWeight / ((personHeight * personHeight)); //Could be Math.pow(personHeight, 2)
let bmiCondition;

if (bmiValue >= 40){
  bmiCondition = "Obesidade Grave";
} else if (bmiValue >= 30){
  bmiCondition = "Obesidade";
} else if (bmiValue >= 25) {
  bmiCondition = "Acima do Peso";
} else if (bmiValue >= 18.5) {
  bmiCondition = "Peso Normal";
} else {
  bmiCondition = "Abaixo do Peso";
}

console.log (`Seu IMC é de ${bmiValue.toFixed(2)}, sendo assim seu quadro é de: ${bmiCondition}!`);
