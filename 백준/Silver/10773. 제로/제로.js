const fs = require('fs')
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const numbers = input.map(Number);
let noZeroArray = [];
let count = 0;

for (const number of numbers) {
    if (number === 0) {
        if (numbers) {
            noZeroArray.pop()
        }
    }
    if (number !== 0) {
        noZeroArray.push(number)
    }
}

for (const array of noZeroArray) {
    count += array;
}
console.log(count);