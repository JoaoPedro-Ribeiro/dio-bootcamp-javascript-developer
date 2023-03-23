//Objetos em JS são uma coleção dinamica de chave-valor.

const person = {
  name: 'Not defined',
  age: 'Not defined',
  description: function(){
    console.log(`My name is ${this.name} and i am ${this.age} years old.`);
  }
};

person.name = 'João';
person.age = 22;

person.description();

//I can show a object atribute with a variable, that is very helpful in cases that i don`t know the name of the atribute that i want to show, so i can recive the name by parameter. 
const atribute = 'age';
console.log(person[atribute]);