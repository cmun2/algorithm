const fs = require('fs');
let [T, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < T; i++) {
    const n = cases[i * 3];
    const line1 = cases[i * 3 + 1].split(' ').map(Number);
    const line2 = cases[i * 3 + 2].split(' ').map(Number);
    // console.log('line1', line1);
    // console.log('line2', line2);

    const dp = Array.from({ length: 2 }, () => Array(n).fill(0))

    dp[0][0] = line1[0];
    dp[1][0] = line2[0];

    if (n > 1) {
        dp[0][1] = line1[1] + line2[0];
        dp[1][1] = line2[1] + line1[0];
    }

    // n = 5, n = 7
    for (let j = 2; j < n; j++) {
        // dp[0][2] = line1[2] + Math.max(dp[1][1], dp[1][0])
        dp[0][j] = line1[j] + Math.max(dp[1][j - 1], dp[1][j - 2]);
        dp[1][j] = line2[j] + Math.max(dp[0][j - 1], dp[0][j - 2]);
    }

    const result = Math.max(dp[0][n - 1], dp[1][n - 1]);
    console.log(result);
    
}