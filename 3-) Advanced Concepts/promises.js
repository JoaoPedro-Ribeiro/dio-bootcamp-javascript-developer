const randomNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = parseInt(Math.random() * 100);
    resolve(number);  
  }, 2000)
})

randomNumber
  .then((value) => {
    console.log(value);
    return value * value;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`finalizou!`);
  })