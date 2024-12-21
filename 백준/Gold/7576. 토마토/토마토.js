const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const boxes = input.slice(1).map((box) => box.split(' ').map(Number));

// 익은 토마토: 1, 익지 않은 토마토: 0, 토마토가 들어있지 않은 칸: -1
// 며칠이 지나면 모든 토마토가 익는지, 최소일수
// 저장될때부터 모든 토마토가 익어져있는 상태 : 0, 모든 토마토가 익지 못하는 상태: -1
// 왼쪽, 오른쪽, 아래, 위 움직이기

let queue = [];
let count = 0;

// 모든 토마토가 익었는지 확인
let allRecipe = true; 

// 큐의 시작을 가리키는 포인터
let front = 0;

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]


for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (boxes[i][j] === 1) {
            queue.push([i, j])
        }
        if (boxes[i][j] === 0) {
            allRecipe = false;
        }
    }
}

if (allRecipe === true) {
    console.log(0);
    return;
}

while (front < queue.length) {
    let size = queue.length - front;
    while (size-- > 0) {
        const [x, y] = queue[front++];
    
        for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir];
            const ny = y + dy[dir];
    
            if (nx >= 0 && nx < N && ny >= 0 && ny < M && boxes[nx][ny] === 0) {
                boxes[nx][ny] = 1;
                queue.push([nx, ny])
            }
        }
    }
    if (queue.length > front) count ++;
}

// 익지 않은 토마토 있는지 확인
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (boxes[i][j] === 0) {
            console.log(-1);
            return;
        }
    }
}

console.log(count);