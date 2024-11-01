const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const belt = input[1].split(' ').map(Number);

function solveConveyorBelt(N, K, belt) {
    let steps = 0;
    let robots = Array(N).fill(false);

    while (true) {
        steps++;

        // 1. 벨트가 회전한다.
        belt.unshift(belt.pop());
        robots.pop();
        robots.unshift(false);
        robots[N - 1] = false; // 내리는 위치에 있는 로봇 제거

        // 2. 로봇 이동
        for (let i = N - 2; i >= 0; i--) {
            if (robots[i] && !robots[i + 1] && belt[i + 1] > 0) {
                robots[i] = false;
                robots[i + 1] = true;
                belt[i + 1]--;
            }
        }
        robots[N - 1] = false; // 내리는 위치에 있는 로봇 제거

        // 3. 로봇 올리기
        if (belt[0] > 0) {
            robots[0] = true;
            belt[0]--;
        }

        // 4. 내구도 검사
        const brokenCount = belt.filter(durability => durability === 0).length;
        if (brokenCount >= K) {
            break;
        }
    }

    return steps;
}

console.log(solveConveyorBelt(N, K, belt));