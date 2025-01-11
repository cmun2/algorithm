const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);

const numbers = input[1].split(' ').map(Number);

function minSubarrayLength(numbers, s) {
    let start = 0;
    let sum = 0;
    let minLen = Infinity;

    for (let end = 0; end < numbers.length; end++) {
        sum += numbers[end];

        while (sum >= s) {
            minLen = Math.min(minLen, end - start + 1);
            sum -= numbers[start];
            start += 1
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubarrayLength(numbers, S))