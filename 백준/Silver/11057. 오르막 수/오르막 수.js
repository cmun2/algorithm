const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

// 초기값 설정 (한 자리 수)
for (let j = 0; j <= 9; j++) {
    dp[1][j] = 1;
}

// DP 계산 (누적합 사용)
for (let i = 2; i <= N; i++) {
    dp[i][0] = dp[i - 1][0]; // 끝자리가 0인 경우
    for (let j = 1; j <= 9; j++) {
        dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007; // 이전 값의 누적합
    }
}

// 결과 계산
let result = dp[N].reduce((sum, value) => (sum + value) % 10007, 0);
console.log(result);