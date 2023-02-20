function sum(num1 = 0, num2 = 0) {
    //console.log(num1, num2)
    const total = num1 + num2
    return total
}


function fullName(first, last = ' noman') {
    const fullName = first + last;
    return fullName
}

console.log(fullName('Md', ' sani'))