/*
  1-) Faça um programa que receba a média de um aluno.
  Caso a média seja < 5 imprima "Reprovado"
  Caso a média seja >= 5 e < 7 imprima "Recuperação"
  Caso a média seja >= 7 imprima "Aprovado"
  
  Exemplo:
    Entrada:
      5.5
    Saida:
      Reprovado.
*/

const {gets, print} = require('./aux-functions');

const average = gets();

if (average >= 7){
  print('Aprovado');
} else if (average >= 5){
  print('Recuperação');
} else {
  print('Reprovado');
}