const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const map = input.slice(1).map(line => line.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const dp = Array.from({ length: M }, () => Array(N).fill(-1));

function dfs(x, y) {
  if (x === M - 1 && y === N - 1) return 1; // 도착 지점에 도달하면 경로 수 1 반환
  if (dp[x][y] !== -1) return dp[x][y];     // 이미 계산된 경우 메모이제이션 값 반환

  dp[x][y] = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < M && ny >= 0 && ny < N && map[nx][ny] < map[x][y]) {
      dp[x][y] += dfs(nx, ny);
    }
  }

  return dp[x][y];
}

console.log(dfs(0, 0));