// practice 1
const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(5, 5, 5))

//practice 2
const myLove = `
I love web developer.
I love code.
I love eat biryani.
`;
// console.log(myLove)

// practice 3
const sum = (num1, num2 = 6) => num1 + num2;
// console.log(sum(5))

// practice 4
const friends = ['Noman', 'Rakib', 'Thalha', 'Mamun', 'Josim', 'sani']
const largeName = (friends) => {
    const newArray = [];
    for (const friend of friends) {
        if (friend.length % 2 == 0) {
            newArray.push(friend)
        }
    }
    return newArray
}
// console.log(largeName(friends))


// practice 5
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const maxNumber = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    return Math.max(...newArr)
}
// console.log(maxNumber(arr1, arr2))

