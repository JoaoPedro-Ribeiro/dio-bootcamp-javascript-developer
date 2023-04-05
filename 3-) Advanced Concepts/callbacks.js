function sum (x, y){
  return x + y;
}

function multiplication(x, y){
  return x * y;
}

function calculator(x, operation, y){
  console.log(operation(x, y));
}

calculator(10, sum, 20);
calculator(10, multiplication, 20);

document.getElementById('btn1').addEventListener('click', () => {
  console.log('Clicou!');
})