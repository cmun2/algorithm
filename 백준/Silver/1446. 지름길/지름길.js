const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 입력 처리
const [[n, d], ...inputs] = input
  .map((line) => line.split(' ').map(Number));

// DP 배열 초기화: dp[i] = i로 기본 설정 (고속도로를 1칸씩 가는 경우)
const dp = Array(d + 1)
  .fill(0)
  .map((_, idx) => idx);

// 지름길 정보 저장 (시작 지점별로 도착 지점과 지름길 길이를 저장)
const shortcuts = new Map();
for (const [s, e, c] of inputs) {
  if (!shortcuts.has(s)) shortcuts.set(s, [[e, c]]);
  else shortcuts.set(s, [...shortcuts.get(s), [e, c]]);
}

// DP 갱신
for (let i = 0; i <= d; i++) {
  // 고속도로를 따라 1칸씩 가는 경우 고려
  if (i) dp[i] = Math.min(dp[i - 1] + 1, dp[i]);

  // 지름길을 사용할 경우 계산
  if (shortcuts.has(i)) {
    for (const [e, c] of shortcuts.get(i)) {
      if (e <= d) dp[e] = Math.min(dp[e], dp[i] + c);
    }
  }
}

// 최종 목표 지점까지 가는 최소 거리 출력
console.log(dp.at(-1));