/*
  2-) faça um programa que receba N (quatidade de numeros) e seus respectivos valores
  Imprima o maior número par e o menor número impar.
*/

const {gets, print} = require('./aux-functions');

let numbers = [];
let biggerEvenNumber = 0;
let biggerOddNumber = 0;

for (let i = 0; i <= 100; i++){
  numbers[i] = gets();
  if (numbers[i] % 2 === 0){
    if (numbers[i] > biggerEvenNumber){
      biggerEvenNumber = numbers[i];
    }
  }else {
    if (numbers[i] > biggerOddNumber){
      biggerOddNumber = numbers[i];
    }
  }
}

print(`Maior número par: ${biggerEvenNumber} \n`);
print(`Maior número impar: ${biggerOddNumber} \n`);

