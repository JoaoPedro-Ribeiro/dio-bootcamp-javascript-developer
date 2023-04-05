class Person{
  constructor(name){
    this.name = name;
  }
}

const list = [new Person('Joao'), new Person('Andresa'), new Person('Vitor'), new Person('Renan')];

const nameList = list.map((value, i) => `${i} - ${value.name}`);

console.log(nameList);