def solution(n, computers):
    answer = 0
    visited = [0] * n
    
    while sum(visited) != n:
        bfs = [visited.index(0)]
        answer += 1
        while bfs:
            node = bfs.pop(0)
            for i, line in enumerate(computers[node]):
                if line and not visited[i]:
                    visited[i] = 1
                    bfs.append(i)
    return answer