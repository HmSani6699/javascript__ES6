const grandfather = {
    name: 'Nasir',
    age: 80,
    father: {
        name: 'Aboul',
        age: 45,
        children: ['sister', 'brother']
    }
};

// const { father } = grandfather;
// const { children } = father
// console.log(children[1]);

const children = grandfather.fathers?.children;
console.log(children)