//Regular function
function sum(num1, num2) {
    const total = num1 + num2;
    return total
}

//Function Expression
const sum2 = function (a, b) {
    const num1 = a;
    const num2 = b;
    const multiply = num1 * num2
    return multiply
}

//declare the arrow function

//no parameter in arrow function 
const num3 = () => 5 * 6;

//one parameter the arrow function 
const num4 = (num) => num + 20;
//author one parameter 
const num5 = num => num / 2;

//multi line arrow function 
const num6 = (a, b, c, d) => {
    const num1 = a + b;
    const num2 = c + d
    const multiply = num1 * num2
    const debit = multiply / 2
    return debit
}
console.log(num6(5, 5, 5, 5))