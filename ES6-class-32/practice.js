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

// console.log(allEvent)
