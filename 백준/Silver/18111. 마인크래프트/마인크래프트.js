const fs = require('fs')
const [size, ...heights] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, B] = size.split(' ').map(Number);
const ground = heights.map((height) => height.split(' ').map(Number));

// 목표: 땅의 높이 일정하게
// 1. 좌표 (i, j)의 블록 제거 -> 2초
// 2. 좌표 (i, j)의 블록 추가 -> 1초
// 최소시간 그 경우 땅의 높이
// 작업시작시 인벤토리에 B개의 블록이 있다.
// 땅의 높이는 최대 256이고 음수는 불가능

const MAX_HEIGHT = 256
const MIN_HEIGHT = 0

let minTime = Infinity;
let targetHeight = 0;

const findGround = () => {
    // 모든 가능성이 있는 HEIGHT에 대해 순회
    for (let h = MIN_HEIGHT; h <= MAX_HEIGHT; h++) {
        let remove = 0;
        let add = 0;

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                const diff = ground[i][j] - h;
                if (diff > 0) {
                    // 제거해야 하는 경우
                    remove += diff;
                } else {
                    // 블록을 추가해야 하는경우(h가 더 작은 상태이므로 diff가 음수임)
                    add -= diff;
                }
            }
        }
        // 인벤토리에 있는 블럭으로 해당 높이를 만들 수 있는지 확인
        if (remove + B >= add) {
            const time = remove * 2 + add
    
            if (time < minTime || (time === minTime && h > targetHeight)) {
                minTime = time;
                targetHeight = h
            }
        }
    }
}

findGround()

console.log(minTime, targetHeight);