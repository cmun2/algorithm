const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const N = parseInt(input[0]);
const M = parseInt(input[1]);

let result = '';
const output = [];

function dfs(start, depth) {
    if (depth === M) {
        result += `${output.join(' ')}\n`;
        return;
    }

    for (let i = start; i <= N; i++) {
        output.push(i);
        dfs(i + 1, depth + 1);
        output.pop();
    }
}

dfs(1, 0);
console.log(result);