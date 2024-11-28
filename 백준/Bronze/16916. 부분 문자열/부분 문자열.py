import sys  
input = sys.stdin.readline  

target = input().rstrip()
word = input().rstrip()  

print(1 if word in target else 0)