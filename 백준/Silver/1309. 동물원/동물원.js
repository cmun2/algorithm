const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

const MOD = 9901;

// DP 배열 초기화
const dp = Array.from({ length: N }, () => Array(3).fill(0));

// 초기 조건
dp[0][0] = 1; // 사자를 배치하지 않는 경우(X, X)
dp[0][1] = 1; // 왼쪽 칸에 사자를 배치(O, X)
dp[0][2] = 1; // 오른쪽 칸에 사자를 배치(X, O)

// 점화식 계산
for (let i = 1; i < N; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % MOD;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
}

// 결과 계산
const result = (dp[N - 1][0] + dp[N - 1][1] + dp[N - 1][2]) % MOD;
console.log(result);