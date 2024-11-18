const fs = require('fs');
const [size, ...path] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const paths = path.map((pair) => {
    return pair.split(' ').map(Number);
})

const dp = Array.from({length: size}, () => Array(size).fill(0))

dp[0][0] = paths[0][0]

for (let i = 1; i < size; i++) {
    for (let j = 0; j <= i; j++) {
        if (j === 0) {
            // 삼각형의 왼쪽 끝 값
            dp[i][j] = dp[i - 1][j] + paths[i][j]
        } else if (j === i) { 
            // 삼각형의 오른쪽 끝 값
            // dp[2][2] = dp[]
            dp[i][j] = dp[i - 1][j - 1] + paths[i][j]
        } else {
            // 삼각형의 중간 값
            // dp[2][1] = dp[i - 1][j]
            dp[i][j] = Math.max(dp[i - 1][j - 1] + paths[i][j], dp[i - 1][j] + paths[i][j])
        }
    }
}

console.log(Math.max(...dp[size - 1]));