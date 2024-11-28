import sys

lines = sys.stdin.read().strip().split("\n")

N, M = map(int, lines[0].split())  # 첫 줄에서 N, M 추출
S = set(lines[1:N+1])  # 집합 S 생성
T = lines[N+1:N+1+M]  # 검사할 단어 목록
count = sum(1 for word in T if word in S)
print(count)