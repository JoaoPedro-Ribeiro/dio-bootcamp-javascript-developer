const number = 10;
const isEvenNumber = (numero % 2) === 0;

if (number === 0){
  console.log("Invalid Number");
} else if (isEvenNumber){
  console.log("Even Number");
} else {
  console.log("Prime Number");
}