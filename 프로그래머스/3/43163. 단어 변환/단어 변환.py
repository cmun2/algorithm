from collections import deque

def solution(begin, target, words):
    if target not in words:
        return 0
    
    #시작 단어, 변환한 횟수
    q = deque([(begin, 0)])
    
    while q:
        cur_word, depth = q.popleft()
        
        if cur_word == target:
            print(cur_word)
            print(target)
            return depth
        
        for word in words:
            if sum([cur_word[i] != word[i] for i in range(len(cur_word))]) == 1:
                q.append([word, depth+1])
                
    return 0