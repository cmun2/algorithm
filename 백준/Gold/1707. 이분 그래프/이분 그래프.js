const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const K = parseInt(input[0]);
let idx = 1;

let result = []
for (let i = 0; i < K; i++) {
    const [V, E] = input[idx++].split(' ').map(Number);
    const graph = Array.from({ length: V + 1 }, () => []);

    // 간선 입력
  for (let j = 0; j < E; j++) {
    const [u, v] = input[idx++].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  // 이분 그래프 판별
  result.push(bfs(graph, V) ? "YES" : "NO");
}

function bfs(graph, V) {
    const color = Array(V+1).fill(-1);
    const queue = [];

    for (let start = 1; start <= V; start++) {
        if (color[start] === -1) {
            color[start] = 0;
            queue.push(start);

            while (queue.length > 0) {
                const node = queue.shift();
                for (const neighbor of graph[node]) {
                    if (color[neighbor] === -1) { //색이 칠해지지 않을 때 반대색으로 칠하기
                        color[neighbor] = 1 - color[node];
                        queue.push(neighbor);
                    } else if (color[neighbor] === color[node]) { // 같은 색이면 이분 그래프가 아니다
                        return false;
                    }
                }
            }
        } 
    }
    return true;
}

console.log(result.join('\n'));