N = int(input())
words = [ input() for _ in range(N) ]
count = 0

for word in words: 
    prev = word[0]
    before = []
    isGroup = True
   
    for i in range(len(word)):
        if word[i] != prev:
            before.append(prev)
            
        if word[i] in before:
            isGroup = False
            break
        prev = word[i]
            
    if isGroup:
        count += 1
        
print(count)
            