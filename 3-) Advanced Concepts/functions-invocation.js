function test(){
  console.log(`Test`);
}

test(); //Direct Invocation

const person = {
  name: 'João',
  age: 22
}

function scream(prefix){
  console.log(prefix, this.name);
}

scream.apply(person, [`Hellooo`]); //I`m applying the person`s contexto to scream and we can pass the arguments with an array

scream.call(person, 'Helloooo'); //Its the same result as apply, but we don`t pass the arguments with an array






