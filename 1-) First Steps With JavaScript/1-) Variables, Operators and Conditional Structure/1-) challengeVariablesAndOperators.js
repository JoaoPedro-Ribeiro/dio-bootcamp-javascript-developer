// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustivel;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem.

// Imprima no console o valor que será gasto para realizar esta viagem.

let priceOfFuel = 4.50;
let averageFuelConsumption = 10;
let tripDistance = 450;

console.log(`O valor que será gasto é: ${(tripDistance/averageFuelConsumption)*priceOfFuel}`);