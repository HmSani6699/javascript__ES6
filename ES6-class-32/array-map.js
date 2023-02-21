const number = [1, 2, 3, 4, 5];

const result = number.map(function (value) { return value * 2 });
// console.log(result);

const multiply = number.map(value => value * 3);
// console.log(multiply)

const sum = number.map(x => x + x);
// console.log(sum)

const friends = ['Alif', 'Babu', 'Raju', 'Kobir'];
const friend = friends.map(f => f.length);
// console.log(friend);

const products = [
    { id: 1, name: 'laptop', price: 1200 },
    { id: 2, name: 'mobile', price: 3200 },
    { id: 3, name: 'box', price: 500 },
    { id: 4, name: 'ipad', price: 11200 },
];

const product = products.map(p => p);
const productPrice = products.map(p => {
    const s = p.price
    return s
});
console.log(productPrice)

