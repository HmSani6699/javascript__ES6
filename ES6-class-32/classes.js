class Structure {
    constructor(name, age,) {
        this.name = name
        this.age = age
    }
    sum(a, b) {
        return a + b
    }
}

const ami = new Structure('sani', 19);
const she = new Structure('adiba', 18);

// console.log(she.sum(2, 5))

const product = { name: 'Laptop', model: 'Yoga 3', price: 49000, dusk: '512SSD' }
let { price } = product
// console.log(price)




class Madrasa {
    name;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    bivag1 = 'Moktob';
    bivag2 = 'Najera';
    bivag3 = 'Hefj';
    bivag4 = 'Kitab';
    madrasa() {
        console.log('I love my alia')
    }
}

class Alia extends Madrasa {
    constructor(name, location) {
        super(name, location)
    }
    panjabi = 'fala';
    topi = 'bati';
}

class Qume extends Madrasa {
    constructor(name, location) {
        super(name)
        this.location = location
    }
    panjabi = 'jobba';
    topi = 'pas koli';
}

const madrasa1 = new Alia('omor ali', 'pakunda');
// console.log(madrasa1)

const madrasa2 = new Alia('pakunda islamia madrasa', 'pakunda');
// console.log(madrasa2);
// madrasa2.madrasa()

const madrasa3 = new Qume('internesnal madrasa', 'nai gram');
console.log(madrasa3)