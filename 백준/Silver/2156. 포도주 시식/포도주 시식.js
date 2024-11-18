const fs = require('fs')
const [count, ...amount] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// 포도주 잔 선택 -> 모두 마시고, 마신후에는 -> 돌려놓는다
// 연속 3잔을 모두 마실수는 없다.
// 1부터 n까지 번호가 붙어 있는 n개의 포도주 잔 순서대로 놓여있다.
// 각 포도주 잔에 들어있는 양이 주어진다.
// 가장 많은 양의 포도주를 마실 수 있도록 하는 프로그램 출력
if (count === 1) {
    console.log(amount[0]);
    process.exit(0);
}

if (count === 2) {
    console.log(amount[0] + amount[1])
    process.exit(0);
}

const dp = Array.from({ length: 1}, () => Array(count).fill(0)).flat();
dp[0] = amount[0] // 첫번째 잔
dp[1] = amount[0] + amount[1] // 두번째 잔
dp[2] = Math.max(dp[1], amount[0] + amount[2], amount[1] + amount[2]); // 찻 3진 처리

// i번째 포도주를 마시지 않는 경우(i-1번째는 마신경우): dp[i] = dp[i - 1]
// i번째 포도주를 마시고 i-1번째 포도주를 마시지 않는 경우: dp[i] = dp[i - 2] + amount[i]
// i번째, i-1번째 포도주를 마시고 i-2번째 포도주를 마시지 않는 경우: dp[i] = dp[i - 3] + amount[i - 1] + amount[i]
for (let i = 3; i < count; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + amount[i], dp[i - 3] + amount[i - 1] + amount[i])
}

console.log(dp[count - 1]);