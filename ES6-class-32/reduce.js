const number = [1, 2, 3, 4, 5];

const sum = number.reduce((accumulated, current) => {
    console.log(accumulated, current)
    return accumulated + current
}, 0);
// console.log(sum)


const array = [1, 2, 3, 4, 5];
const total = array.reduce();