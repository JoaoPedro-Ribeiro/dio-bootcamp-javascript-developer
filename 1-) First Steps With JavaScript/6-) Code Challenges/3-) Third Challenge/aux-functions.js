const salaryMax = 5000;
const salaryMin = 750;
const benefitMax = 500;
const benefitMin = 50;

function gets(){
  const salaryValue = Math.floor(Math.random() * (salaryMax - salaryMin) + salaryMin);
  const benefitValue = Math.floor(Math.random() * (benefitMax - benefitMin) + benefitMin);
  return (salaryValue + benefitValue);
}

function print(text){
  console.log(text);
}

module.exports = {gets, print};