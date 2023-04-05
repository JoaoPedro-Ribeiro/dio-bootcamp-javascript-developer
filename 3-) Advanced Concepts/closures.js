function sum(x){
  return function (y){
    return x + y;
  }
}

const partialSum = sum(10);

console.log(partialSum(20));
console.log(partialSum(30));
console.log(partialSum(40));

/*
  The function`s ability to record the value that it recived in the declaration is classed closures. 

  In the example above, it saved the value 10, that is the value of x. So it "converted" the x to const, and only changed the value of y when we passed the values on the console.log
*/