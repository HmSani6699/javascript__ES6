let name = 'sadiq';
const age = 19;

const information = {
    village: 'pakunda',
    thana: 'sonarga',
    jela: 'narayoungonj'
}

const templateString = `
my name is : ${name}.
my age ${age}.
my village name ${information.village}.
my thana name ${information.thana}
`;
console.log(templateString)