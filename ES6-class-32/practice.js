// practice 1
const number = [1, 3, 5, 7, 9];
//now convert to array in event number use the map
const eventNumber = number.map(num => num + 1);
// console.log(eventNumber)

// now convert to array in event number use the for loop
const allEvent = []
for (let i = 0; i < number.length; i++) {
    const event = number[i] + 1
    allEvent.push(event)
}

// console.log(allEvent);

// practice 2
//now return all element witch are divisible 10 use the filter method
const array = [33, 50, 79, 78, 90, 101, 30, 10];
const result = array.filter(num => num % 10 === 0);
// console.log(result)

// practice 3
//sem task using the find method
const result1 = array.find(num => num % 10 === 0);
// console.log(result1)


// practice 4
//sum all element using the reduce method
const array2 = [1, 9, 17, 22];
const sum = array2.reduce((accumulated, current) => accumulated + current, 1)
// console.log(sum)


// practice 5
//sum the all friends age. using to for loop and reduce
const friends = [
    { name: 'Adiba', age: 20, location: 'Ilomdi' },
    { name: 'Babu', age: 15, location: 'Pakunda' },
    { name: 'Thalha', age: 22, location: 'Sirabo' }
];

const allAge = friends.reduce((accumulated, current) => accumulated + current.age, 0);
// console.log(allAge);


// practice 6
// access object value
const father = {
    name: 'Abul fojal raja',
    age: 45
};
const { name, age } = father;
// console.log(name, age);

// practice 7

const grandfather = {
    name: 'Nasir',
    age: 80,
    father: {
        name: 'Abul',
        age: 45,
        children: ['male', 'female', { address1: 'pakunda' }]
    }
};

const { address1 } = grandfather.father.children[2];
// console.log(address)

// practice 8
const data = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name1": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

const { email, address } = data;
const { city, geo } = data.address;
const { lat } = data.address.geo;
const { name1 } = data.company
// console.log(name1)