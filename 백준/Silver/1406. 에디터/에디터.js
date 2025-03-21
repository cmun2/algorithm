const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const startString = input[0];
const numCommand = parseInt(input[1]);

let leftStack = startString.split('');
let rightStack = [];

for (let i = 2; i <= numCommand + 1; i++) {
    const command = input[i];

    if (command.includes('P')) {
        const [_, letter] = command.split(' ');
        leftStack.push(letter);
    } else if (command === 'L') {
        if (leftStack.length > 0) {
            rightStack.push(leftStack.pop());
        }
    } else if (command === 'D') {
        if (rightStack.length > 0) {
            leftStack.push(rightStack.pop());
        }
    } else if (command === 'B') {
        if (leftStack.length > 0) {
            leftStack.pop();
        }
    }
}

// 두 스택을 합쳐서 최종 결과 출력
console.log(leftStack.join('') + rightStack.reverse().join(''));