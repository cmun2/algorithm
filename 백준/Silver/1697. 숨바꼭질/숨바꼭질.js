const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

// 수빈이와 동생의 위치가 같다면, 0초가 걸림
if (N === K) {
    console.log(0);
    return;
}

// BFS 준비
const visited = Array(100001).fill(false);
const queue = [[N, 0]]; // 큐에 (현재 위치, 시간) 저장
visited[N] = true;

while (queue.length > 0) {
    const [current, time] = queue.shift();

    // 가능한 이동 경로 (current - 1, current + 1, 2 * current)
    const nextPositions = [current - 1, current + 1, current * 2];

    for (const next of nextPositions) {
        if (next >= 0 && next <= 100000 && !visited[next]) {
            // 동생을 찾으면 바로 출력
            if (next === K) {
                console.log(time + 1);
                return;
            }
            visited[next] = true;
            queue.push([next, time + 1]);
        }
    }
}