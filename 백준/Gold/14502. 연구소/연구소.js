const fs = require('fs')
const [size, ...wall] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = size.split(' ').map(Number);
const board = wall.map((row) => row.split(' ').map(Number))
let maxSafeZone = 0;

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
// 0: 빈칸, 1: 벽, 2: 바이러스

const spreadVirus = (tempBoard) => {
    let queue = [];

    // 바이러스 위치 찾기
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (tempBoard[i][j] === 2) {
                queue.push([i, j])
            }
        }
    }

    while (queue.length) {
        const [x, y] = queue.shift();

        for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir];
            const ny = y + dy[dir];

            if (nx >= 0 && nx < N && ny >= 0 && ny < M && tempBoard[nx][ny] === 0) {
                tempBoard[nx][ny] = 2; //바이러스 확산
                queue.push([nx, ny])
            }
        }
    }

    // 안전영역 계산
    let safeZone = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (tempBoard[i][j] === 0) {
                safeZone++;
            }
        }
    }

    return safeZone;
}

const setWalls = (count) => {
    if (count === 3) {
        const tempBoard = board.map((row) => [...row]) //복사
        const safeZone = spreadVirus(tempBoard)
        maxSafeZone = Math.max(safeZone, maxSafeZone);
        return;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] === 0) {
                board[i][j] = 1;
                setWalls(count + 1);
                board[i][j] = 0;
            }
    
        }
    }
}

setWalls(0);
console.log(maxSafeZone);