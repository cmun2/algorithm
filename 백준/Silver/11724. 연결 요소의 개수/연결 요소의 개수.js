const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const edges = input.slice(1).map((num) => num.split(' ').map(Number));

function bfs(N,M,edges) {
    const graph = Array.from({ length: N + 1 }, () => []);
    const visited = Array(N + 1).fill(false);
    for (let [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }

    let componentCount = 0;
    function visit(node) {
        const queue = [node];
        visited[node] = true;
        while (queue.length > 0) {
            const current = queue.shift();
            for (const neighbor of graph[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            }
        }
    }
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            componentCount++;
            visit(i);
        }
    }

    return componentCount;
}
console.log(bfs(N,M, edges));