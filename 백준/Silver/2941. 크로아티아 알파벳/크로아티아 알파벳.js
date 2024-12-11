const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

const croatiaAlphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for (let alphabet of croatiaAlphabets) {
    input = input.split(alphabet).join('X')
}

console.log(input.length);