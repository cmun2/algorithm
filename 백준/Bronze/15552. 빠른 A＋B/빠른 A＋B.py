import sys

N = int(sys.stdin.readline().rstrip())

for _ in range(N):
    x, y = map(int, sys.stdin.readline().split())
    print(x + y)