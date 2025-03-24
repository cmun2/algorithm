const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, K] = input[0].split(' ').map((list) => parseInt(list));
const A = input.slice(1, N + 1).map((list) => list.split(' ').map(Number));
const C = input.slice(N + 1).map((list) => list.split(' ').map(Number));

// (r,c) c가 좌측에서부터 오른쪽 r이 위쪽에서부터 아래쪽 
// (r-1, c-1), (r-1, c), (r-1, c+1), (r, c-1), (r, c+1), (r+1, c-1), (r+1, c), (r+1, c+1)
const direction = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1], 
    [1, -1], [1, 0], [1, 1]
]

// 나무의 상태와 양분관리 객체
// 나무 상태와 양분을 관리하는 객체
// let area = Array.from({length: N}, () => Array(N).fill({ food: 5, tree: [], seed: 0}))
// let area = Array.from({ length: N }, () => Array(N).map(() => ({ food: 5, tree: [], seed: 0 })));
let area = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => ({ food: 5, tree: [], seed: 0 })) // 각 칸을 독립적으로 초기화
  );

// 초기 나무 정보로 나무 상태 초기화
// C.forEach(([x, y, z]) => {
//     if (x - 1 >= 0 && x - 1 < N && y - 1 >= 0 && y - 1 < N) {
//         area[x - 1][y - 1].tree.push(z);
//     }
// });
// 초기 나무 정보로 나무 상태 초기화
C.forEach(([x, y, z]) => {
    area[x -1][y - 1].tree.push(z);
})

const happyNewYear = () => {
    // 봄, 여름, 가을 ,겨울 처리
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            let livingTree = [];
            let deadTree = 0;

            // 봄
            // 나이가 어린것부터 우선 처리
            area[i][j].tree.sort((a, b) => a - b);
            
            while (area[i][j].tree.length > 0) {
                const tree = area[i][j].tree.shift();
                // tree의 나이가 현재 제공되는 양분안에 들어가기 때문에 
                if (tree <= area[i][j].food) {
                    // 양분은 그 나이만큼 빠지고
                    area[i][j].food -= tree;
                    // 나이가 한살 증가한다.
                    livingTree.push(tree + 1)
                    // 가을: 번식, 5의 배수일 때
                    if ((tree + 1) % 5 === 0) {
                        for (let [dx, dy] of direction) {
                            const nx = i + dx;
                            const ny = j + dy;
                            if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
                                area[nx][ny].seed++;
                            }
                        }
                    }
                } else {
                    // 여름: 죽는 나무
                    deadTree += Math.floor(tree / 2);
                }
            }
            // 기존 양분 + 죽은 나무 = 새로운 양분(여름 + 겨울)
            area[i][j].food += deadTree + A[i][j]
            area[i][j].tree = livingTree;
        }
    }
}

const plantTree = () => {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            while (area[i][j].seed > 0) {
                area[i][j].tree.unshift(1);
                area[i][j].seed--;
            }
        }
    }
}

let answer = 0;

for (let i = 0; i < K; i++) {
    happyNewYear();
    plantTree();
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        answer += area[i][j].tree.length;
    }
}

console.log(answer);