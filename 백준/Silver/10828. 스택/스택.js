const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0])
const orders = input.slice(1);
const stack = [];
const printed = [];

for (const order of orders) {
    if (order.includes('push')) {
        const pushed = order.split(' ')
        const pushOrder = pushed[0]
        const pushNum = parseInt(pushed[1])
        stack.push(pushNum);
    }
    if (order === 'pop') {
        const poppedNum = stack.pop();
        if (stack) {
            if (poppedNum) {
                printed.push(poppedNum);
            } else {
                printed.push(-1);
            }
        }
    }
    if (order === 'size') {
        printed.push(stack.length);
    }
    if (order === 'empty') {
        if (stack.length) {
            printed.push(0)
        } else {
            printed.push(1);
        }
    }
    if (order === 'top') {
        if (stack.length) {
            printed.push(stack[stack.length - 1])
        } else {
            printed.push(-1);
        }
    }

}
console.log(...printed, split="\n");