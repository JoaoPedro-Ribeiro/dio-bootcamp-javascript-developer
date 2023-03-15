// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem.

// Imprima no console o valor que será gasto para realizar esta viagem.

const ethanolValue = 3.50;
const gasolinevalue = 5;
const typeOfFuelOnTheCar = "gasoline";
const averageFuelConsumption = 10;
const tripDistance = 780;

const fuelConsumption = tripDistance / averageFuelConsumption;

if (typeOfFuelOnTheCar === "gasoline"){
  console.log(`O gasto na viagem é de ${fuelConsumption * gasolinevalue}.`);
} else {
  console.log(`O gasto na viagem é de ${fuelConsumption * ethanolValue}.`);
}