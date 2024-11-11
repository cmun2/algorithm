const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0]);
const integerList = input.slice(1).map(Number);

const maxN = Math.max(...integerList);
const dp = Array(maxN + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= maxN; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
}

const results = integerList.map(n => dp[n])
console.log(results.join('\n'));