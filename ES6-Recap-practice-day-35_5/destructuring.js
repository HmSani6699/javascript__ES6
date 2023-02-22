//object destructuring 
const myInformation = {
    name: 'sadiq',
    age: 19,
    education: {
        school: 8,
        madrasa: 'hefj'
    }
};
const { education } = myInformation;
const { madrasa } = education
// console.log(madrasa)

//array destructuring 
const array = [1, 2, 3, 4, 5, 6];
const [...three] = array
console.log(three)




