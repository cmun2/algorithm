from collections import deque

def solution(rectangle, characterX, characterY, itemX, itemY):
    # 좌표 확장을 위해 모든 좌표값을 2배로 키움
    board = [[0] * 102 for _ in range(102)]

    # 직사각형 경계만 표시 (좌표 크기를 2배로 확장)
    for x1, y1, x2, y2 in rectangle:
        x1, y1, x2, y2 = 2 * x1, 2 * y1, 2 * x2, 2 * y2
        for i in range(x1, x2 + 1):
            for j in range(y1, y2 + 1):
                if x1 < i < x2 and y1 < j < y2:
                    board[i][j] = 2  # 내부는 2로 표시
                elif board[i][j] != 2:
                    board[i][j] = 1  # 경계는 1로 표시

    # BFS 탐색 준비 (좌표 역시 2배로 확장)
    q = deque([(characterX * 2, characterY * 2)])
    visited = [[False] * 102 for _ in range(102)]
    visited[characterX * 2][characterY * 2] = True
    di = [0, 1, 0, -1]
    dj = [1, 0, -1, 0]
    steps = 0

    # BFS 탐색
    while q:
        for _ in range(len(q)):
            ci, cj = q.popleft()

            # 아이템에 도착하면 반환
            if ci == itemX * 2 and cj == itemY * 2:
                return steps // 2  # 좌표를 2배로 했으므로 결과는 2로 나눔

            # 4방향으로 이동
            for d in range(4):
                ni, nj = ci + di[d], cj + dj[d]
                if 0 <= ni < 102 and 0 <= nj < 102 and not visited[ni][nj] and board[ni][nj] == 1:
                    visited[ni][nj] = True
                    q.append((ni, nj))
        steps += 1

    return -1