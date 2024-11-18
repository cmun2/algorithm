const fs = require('fs')
let [size, ...array] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
size = Number(size); 
const suyeol = array.map((pair) => pair.split(' ').map(Number)).flat()

const dp = Array(size).fill(0);

// dp 초기화
for (let i = 0; i < size; i++) {
    dp[i] = suyeol[i]
}

// dp 점화식

for (let i = 1; i < size; i++) {
    for (let j = 0; j < i; j++) {
        if (suyeol[j] < suyeol[i]) {
            // 100 2
            dp[i] = Math.max(dp[i], dp[j] + suyeol[i]);
        }
    }
}

console.log(Math.max(...dp))