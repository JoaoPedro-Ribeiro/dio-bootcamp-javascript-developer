const person = {
  gender: 'Masculine'
};

const joao = {
  name: 'João',
  age: 22,
  __proto__: person
};

console.log(joao.gender);

const description = {
  power: 'Super Fast'
} 

const hero = Object.create(description) //creates an object with a prototype, in this case an object called hero with a prototype description

hero.name = 'Flash'

console.log(hero.power)
