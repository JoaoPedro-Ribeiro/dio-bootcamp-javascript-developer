/* 
  Vanilla JS is weakly typed language, so we can change the type of the content easily  
*/
var firstVar = 10; //Here our variable is receiving a int value
firstVar = 'Text'; //But we can change to String
firstVar = true; //Or boolean
firstVar = 15; //Or back to int easily. And the language tries to convert our values to the correct type when we try some operations.

secondVar = 'João';

console.log(firstVar + secondVar); //If we try to add a int variable with a string one, it will convert our number to text and concat the strings. Result= 15João

//But if the value of our string variable is a number, it will convert the string to int or double and do the operation
secondVar = '5';  
console.log(firstVar - secondVar); //Result = 10 (If it were a sum operation, it would concat as well).

