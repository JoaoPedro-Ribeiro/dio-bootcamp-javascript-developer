const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(list.join(';'));

class Person{
  constructor(name){
    this.name = name;
  }
}

const newList = [new Person('Joao'), new Person('Andresa'), new Person('Vitor'), new Person('Renan'), new Person('Julio'), new Person('Jaime')];

console.log(newList.map((value) => value.name).join(', '));

const namesWithJ = newList.filter((value) => value.name.startsWith('J'));

console.log(namesWithJ.map((value) => value.name).join(', '));
