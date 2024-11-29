import sys
lines = sys.stdin.read().strip().split("\n")
N, S = map(int, lines[0].split())
numbers = list(map(int, lines[1].split()))
    
left, right = 0, 0
sum = 0
min_length = sys.maxsize

while True:
    if sum >= S:
        min_length = min(min_length, right - left)
        sum -= numbers[left]
        left += 1
    elif right == N:
        break
    else:
        sum += numbers[right]
        right += 1

if min_length == sys.maxsize:
    print(0)
else:
    print(min_length)
