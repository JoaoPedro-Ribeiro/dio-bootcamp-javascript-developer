//Explicit declaration
function newFunction1 (){
  console.log(this);
}

//Arrow Function
const newFunction2 = () => {
  console.log(this);
}

const joao = {
  nome: `João`,
  newFunction1,
  newFunction2
}

joao.newFunction1();
joao.newFunction2();

/*
  The main difference between the Explicit declaration and the arrow function is the context. Arrow function doesn`t have a context.

  In the above exemple we pass both functions as my object atributes, doing this, the function takes the object`s context, but it doesn`t happen with the arrow function, so when we call the functions, just the first one prints values in the console. 
*/

