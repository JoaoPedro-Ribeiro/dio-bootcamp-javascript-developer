const fileScanner = require('fs');
const path = require('path')

const filePath = path.resolve(__dirname, 'tasks.csv')

async function findFile(){
  const file = await fileScanner.promises.readFile(filePath)
  const fileText = file.toString('utf-8')
  console.log(fileText)
}

findFile()