function Person(name, age){
  this.name = name
  this.age = age
}

Person.prototype.speak = function() {
  console.log(this.name)
}

const renan = new Person('renan', 30);

renan.speak();

class People {
  constructor(name, age){
    this.name = name
    this.age = age
  }
  speak() {
    console.log(this.name)
  }
}

const joao = new People('Joao', 22);
joao.speak();