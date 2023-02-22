// Map 
const number = [1, 2, 3, 4, 5];
const result = number.map(num => num * 2);
// console.log(result)


//forEach
const number1 = [1, 2, 3, 4, 5];
// const result1 = number1.forEach(num => console.log(num))


//filter
const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result2 = number2.filter(num => num % 2 == 1);
// console.log(result2)

//find
const number3 = [1, 2, 3, 4, 5];
const result3 = number3.find(num => num < 3);
console.log(result3)