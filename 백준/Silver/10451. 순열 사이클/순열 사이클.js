const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0]);
let idx = 1;

for (let i = 0; i < T; i++) {
    const N = parseInt(input[idx++]);
    const permutation = input[idx++].split(' ').map(Number);

    let visited = new Array(N).fill(false);  // 방문 여부를 체크할 배열
    let cycleCount = 0;

    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            let stack = []
            let current = i

            while (!visited[current]) {
                visited[current] = true;
                stack.push(current);
                current = permutation[current] - 1;
            }

            if (stack.includes(current)) {
                cycleCount++;
            }
        }
    }

    console.log(cycleCount);
}