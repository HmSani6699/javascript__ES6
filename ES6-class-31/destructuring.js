const student = {
    name: 'Adib',
    age: 20,
    address: 'pakinda',
    father: {
        name: 'apu',
        age: 26,
        address: 'namapara'
    }
}

const { name: myName, age: myAge } = student.father
// console.log(myName);
// console.log(myAge);



// destructuring the array

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const [first, second, third] = array
// console.log(third)

const nayikas = ['mousumi', 'popy', 'shabnur', 'purnima'];

// const a = [...nayikas]
// console.log(a)



const { a, ...t } = { a: 1, b: 2, c: 3, d: 4 };
console.log(t)