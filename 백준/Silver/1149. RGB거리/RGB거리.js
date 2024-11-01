const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const costs = input.slice(1).map(line => line.split(' ').map(Number));

function solveRGBStreet(n, costs) {
    // DP 배열 초기화
    const dp = Array.from({ length: n }, () => Array(3).fill(0));
    
    // 첫 번째 집의 비용은 그대로 할당
    dp[0][0] = costs[0][0];
    dp[0][1] = costs[0][1];
    dp[0][2] = costs[0][2];
    
    // DP 테이블 채우기
    for (let i = 1; i < n; i++) {
        dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
        dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
        dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
    }
    
    // 최종 최소 비용 계산
    return Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
}

console.log(solveRGBStreet(n, costs));