// 1 - Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustivel por KM rodado.
// Crie um método que dado a quantidade de kms e o preço do combustivel nos de o valor gasto 
// em reais para realizar este percurso.

class Cars{
  brand;
  color;
  averageFuelExpense;

  constructor(brand, color, averageFuelExpense){
    this.brand = brand;
    this.color = color;
    this.averageFuelExpense = averageFuelExpense;
  }

  calculateAmountExpent(travelledDistance, fuelPrice){
    return ((travelledDistance / this.averageFuelExpense) * fuelPrice);
  }
}

const camaro = new Cars('Chevrolet', 'Yellow', 4);
const travelledDistance = 789;
const fuelPrice = 6.58;

const amoutExpent = camaro.calculateAmountExpent(travelledDistance, fuelPrice);
console.log(`The value expent in this trip was: ${amoutExpent.toFixed(2)} reais.`);