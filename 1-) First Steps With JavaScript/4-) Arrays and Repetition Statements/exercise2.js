//2-) crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

let number = [];

for (let i = 1; i <= 100; i++){
  number[i] = i;
}

for (let i = 1; i <= number.length; i++){
  if (number[i] % 2 === 0){
    console.log(number[i]);
  }
}