const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);  // n은 세로 크기, m은 가로 크기
const map = input.slice(1).map(line => line.split(' ').map(Number));  // 지도 정보

const directions = [
  [0, 1], // 오른쪽
  [0, -1], // 왼쪽
  [1, 0], // 아래쪽
  [-1, 0] // 위쪽
];

let target = null; // 목표지점 위치

// 목표지점 찾기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      target = [i, j]; // 목표지점의 좌표
      break;
    }
  }
  if (target) break;
}

// BFS 함수
function bfs(start) {
  const [startX, startY] = start;
  const queue = [[startX, startY]];
  const distances = Array.from({ length: n }, () => Array(m).fill(-1)); // 모든 지점의 거리를 -1로 초기화
  distances[startX][startY] = 0; // 목표지점은 거리 0

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    // 네 방향으로 탐색
    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 맵을 벗어나지 않고, 갈 수 있는 땅(1)인 경우
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && map[nx][ny] === 1 && distances[nx][ny] === -1) {
        distances[nx][ny] = distances[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return distances;
}

// 목표지점에서 BFS 시작
const distances = bfs(target);

// 결과 출력
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) {
      row += '0 ';
    } else if (distances[i][j] === -1) {
      row += '-1 ';
    } else {
      row += `${distances[i][j]} `;
    }
  }
  console.log(row.trim());
}