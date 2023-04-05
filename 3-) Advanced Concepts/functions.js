// First Class Functions
// High Order Functions

/*
function sayMyName() {
  console.log(`Meu nome é João`);
}

const newReference = sayMyName;

newReference();

function sayMyFullName(sayMyName){
  sayMyName();
  console.log(`Pedro Ribeiro.`);
  return sayMyName;
}

sayMyFullName(sayMyName)();
*/

//Function Declaration
function functionDeclaration(){
  console.log(`Function Declaration`);
}

//Function Expression
const functionExpression = function(){
  console.log(`Function Expression`);
}

/*
  The main difference between both is how the hoisting works. 
  
  I can use the Function Declaration before the declaring code block, it will run normally, but i can`t do that with Function Expression. 

  If I call the function using Function Declaration before the code that is declaring the function, when I run the code, JS will put the declaration block above all other code, but it doesn`t happen with the Function Expression. Actually, it happens, but not in the same way. 

  Remembering that the Function Expression is a way to declare the function in a variable, the hoisting only declare the variable above all the code, but without value, so the function isn`t there, and thats why i cant call the Function Expression before its declaration.
*/