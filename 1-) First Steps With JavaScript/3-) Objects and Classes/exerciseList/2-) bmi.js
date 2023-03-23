/*
  2-) Crie uma classe para representar pessoas.
  Para cada pessoa teremos os atributos: nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
  Instancie uma pesosa chamada José que tenha 70kg de peso e 1,75 de altura e pecá ao José para dizer o valor do seu IMC.
*/

class Person{
  name;
  weight;
  height;

  constructor(name, weight, height){
    this.name = name;
    this.weight = weight;
    this.height = height;
  }

  calculateBMI(){
    console.log(`My BMI is: ${(this.weight / (this.height * this.height)).toFixed(2)}`);
  }
}

const Jose = new Person('José', 70, 1.75);
Jose.calculateBMI();