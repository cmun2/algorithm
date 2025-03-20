const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function main(input) {
    let [N, M, V] = input[0].split(' ').map(Number);
    let edges = input.slice(1).map((num) => num.split(' ').map(Number))

    const dfsResult = dfs(N, M, V, edges)
    const bfsResult = bfs(N, M, V, edges);
    console.log(dfsResult.join(' '));
    console.log(bfsResult.join(' '));
}

function bfs(N, M, V, edges) {
    const graph = Array.from({ length: N + 1 }, () => []);
    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // 정점 번호가 작은 것부터 방문할 수 있도록 정렬
    for (let i = 1; i <= N; i++) {
        graph[i].sort((a, b) => a - b);
    }

    const visited = Array(N + 1).fill(false);
    const queue = [V];
    const result = [];

    visited[V] = true;
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);

        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    return result;
}

function dfs(N, M, V, edges) {
    const graph = Array.from({ length: N + 1 }, () => []);
    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // 정점 번호가 작은 것부터 방문할 수 있도록 정렬
    for (let i = 1; i <= N; i++) {
        graph[i].sort((a, b) => a - b);
    }

    const visited = Array(N + 1).fill(false);
    const stack = [V];
    const result = [];
    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited[node]) {
            visited[node] = true;
            result.push(node);

            // 방문하지 않은 인접 노드를 스택에 추가
            for (let neighbor of graph[node].reverse()) {  // 내림차순으로 스택에 넣어 작은 번호를 먼저 처리
                if (!visited[neighbor]) {
                    stack.push(neighbor);
                }
            }
        }
    }
    return result;
}

main(input);