const number = [12, 22, 32, 24, 25];
// const newNumber = number.map(n => console.log(n + 1));


const products = [
    { id: 1, name: 'laptop', price: 1200 },
    { id: 2, name: 'mobile', price: 3200 },
    { id: 3, name: 'box', price: 500 },
    { id: 4, name: 'ipad', price: 11200 },
];

// const product = products.forEach(function (v) { console.log(v) });

const product = products.forEach(product => console.log(product));
