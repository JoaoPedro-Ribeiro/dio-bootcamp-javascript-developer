//We can create a class like this
class Person {
  name;
  age;

  description(){
    console.log(`My name is ${this.name} and i am ${this.age} years old.`);
  }
}
//And add the values after the declaration
const Joao = new Person();
Joao.name = 'João Pedro';
Joao.age = 25;

const Pedro = new Person();
Pedro.name = 'Pedro Fagundes';
Pedro.age = 33;

Joao.description();
Pedro.description();

//Or we can create a class with a constructor
class Hero {
  name;
  age;
  power;
  yearOfBirth;

  constructor (name, yearOfBirth, power){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.age = 2023 - this.yearOfBirth;
    this.power = power;
  }

  description(){
    console.log(`My name is ${this.name}, i was born in ${this.yearOfBirth} so i am ${this.age} years old and my super power is ${this.power}.`)
  }
}
//And send the value with parameters
const ironMan = new Hero('Iron Man', 1970, 'Billionaire');
console.log(ironMan);
ironMan.description();

//we can compare the class data with functions as well
function compareHerosAge(firstHero, secondHero){
  if (firstHero.age > secondHero.age){
    console.log(`${firstHero.name} is older than ${secondHero.name}!`);
  } else if (secondHero.age > firstHero.age){
    console.log(`${secondHero.name} is older than ${firstHero.name}!`);
  } else {
    confirm.log(`${firstHero.name} and ${secondHero.name} have the same age!`);
  }
}

const spiderMan = new Hero('Spider Man', 2001, 'Spider Skills');

compareHerosAge(ironMan, spiderMan);