const fileScanner = require('fs');

const promiseFileReading = fileScanner.promises.readFile('/Users/joaoribeiro/Desktop/Arquivos/Cursos/DIO/dio-bootcamp-javascript-developer/3-) Advanced Concepts/manipulating-files/tasks.csv')

promiseFileReading
  .then((file) => console.log(file.toString('utf8')))
  .then((text) => console.log(text.split('\n')))
  .catch((error) => {
    console.log(error);
  })