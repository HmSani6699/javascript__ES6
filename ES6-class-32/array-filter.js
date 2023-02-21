const number = [1, 2, 3, 4, 5];
const threeDown = number.filter(n => n > 3);



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const min5 = array.filter(num => num < 5);

const products = [
    { id: 1, name: 'laptop', price: 1200 },
    { id: 2, name: 'mobile', price: 3200 },
    { id: 3, name: 'box', price: 500 },
    { id: 4, name: 'ipad', price: 11200 },
];

const result = products.map(product => {
    if (product.id === 1) return product
    return {}
});
console.log(result)