from collections import deque

def solution(n, computers):
    answer = 0
    seen = [0] * n
    q = deque()
    # q = deque([0] * n)
    # seen = [[0] * n for _ in range(n)]
    
    for i in range(n):
        if seen[i] == 0:
            q.append(i)
            seen[i] = 1
            answer += 1
            
        #bfs
        while q:
            cur = q.popleft()
            for j in range(n):
                if computers[cur][j] == 1 and seen[j] == 0:
                    q.append(j)
                    seen[j] = 1
    
    return answer