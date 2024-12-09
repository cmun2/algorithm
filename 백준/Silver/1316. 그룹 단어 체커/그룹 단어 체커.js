const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0])
const words = input.slice(1);

let count = 0;

for (const word of words) {
    let prev = word[0]; // 첫번째 단어
    const before = [];
    let isGroup = true;

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== prev) {
            before.push(prev);
        }  
        if (before.includes(word[i])) {
            isGroup = false;
            break;
        }
        prev = word[i] //prev 업데이트
    }

    if (isGroup) {
        count += 1;
    }
}

console.log(count);