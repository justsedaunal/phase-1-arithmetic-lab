// Write your code here
const num1 = 31;
const num2 = 2;

function multiply(num1, num2) {
  return num1 * num2;
}
//console.log(multiply(num1, num2));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2

console.log(getRandomInt(1));
// expected output: 0

console.log(Math.random());
// expected output: a number from 0 to <1

const num3 = 13;
const num4 = 9;

//console.log(num3 % num4);

maxNumber = Math.max(1, 20, 2);
console.log(maxNumber);
