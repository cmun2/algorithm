n = int(input())
result = 1
for i in range(1, n+1):
    if n == 0: 
        result = 0
    else:
        result = result * i
print(result)