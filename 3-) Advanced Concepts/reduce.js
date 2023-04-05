//Reducing the list in just one value

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = list.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
})

console.log(sum);