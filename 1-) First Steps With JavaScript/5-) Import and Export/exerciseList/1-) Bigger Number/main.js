/*
  Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
  Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

  Dados de entrada:
  5
  50
  10
  98
  23

  Saída
  98
*/

const {gets, print} = require('./aux-function');

let biggerNumber = 0;

for (i = 0; i < 5; i++){
  const sortedNumber = gets();
  if (sortedNumber > biggerNumber){
    biggerNumber = sortedNumber;
  }
}

console.log(biggerNumber);

