/*
  3-) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
  Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios
  O salario a ser transferido é calculado da seguinte maneira:

  Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos beneficios

  Para calcular o percentual de imposto segue as aliquotas:
    De 0 a 1100 = 5%
    De 1100.01 a 2500 = 10%
    Maior que 2500 = 15%
*/

const {gets, print} = require('./aux-functions');

function calculateTaxPorcentage(salary){
  if (salary > 2500){
    return 15;
  }else if (salary >= 1100.01){
    return 10;
  } else {
    return 5;
  }
}

function calculateTaxValue(salary, porcentage){
  return salary * (porcentage /100);
}

const salary = gets();

porcentage = calculateTaxPorcentage(salary);

print(salary - (calculateTaxValue(salary, porcentage)));
