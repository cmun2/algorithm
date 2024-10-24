from collections import deque

def solution(maps):
    # 도착 불가: -1 리턴
    answer = 0
    n = len(maps)
    m = len(maps[0])
    q = deque([[0, 0]])  # 시작점을 리스트 형태로 큐에 추가
    seen = [[0] * m for _ in range(n)]
    
    # 방향 벡터 (우, 하, 좌, 상)
    di = [0, 1, 0, -1]
    dj = [1, 0, -1, 0]
    
    # 처음 시작점도 방문처리
    seen[0][0] = 1

    while q:
        ci, cj = q.popleft()  # 리스트를 가져옴
        
        # 도착점에 도달했을 경우
        if ci == n - 1 and cj == m - 1:
            return seen[ci][cj]  # 최단 경로 값 반환
        
        # 4방향 탐색
        for k in range(4):
            ni = ci + di[k]
            nj = cj + dj[k]
            
            # 범위를 벗어나면 패스
            if not (0 <= ni < n and 0 <= nj < m):
                continue
            # 벽이거나 이미 방문한 곳이면 패스
            if maps[ni][nj] != 1 or seen[ni][nj] != 0:
                continue
                
            # 방문 표시 및 큐에 추가
            seen[ni][nj] = seen[ci][cj] + 1
            q.append([ni, nj])

    # 도착 불가 시
    return -1