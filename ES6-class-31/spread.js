const number = [2, 3, 54, 5, 5, 6];
const max = Math.max(...number);


const num1 = [2, 3, 54, 5, 5, 6];
const num2 = num1;
num1.push(1111);
num2.push(2222);
// console.log('first: ', num1)
// console.log('second: ', num2)

const num3 = [...num1];
// console.log(num3)
num1.push(3333);
num3.push(5555);
// console.log(num3)
const num = [1, 2, 3, 4, 5]
const num7 = [0, ...num, 7, 8, 9, 10];
num.push(6)
console.log(num7); javascript__ES6
