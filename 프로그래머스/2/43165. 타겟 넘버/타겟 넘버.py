def solution(numbers, target):
    answer = 0
    stack = [(0, 0)]
    
    while stack:
        cur_sum, idx = stack.pop()
        
        if idx == len(numbers):
            if cur_sum == target:
                answer += 1
        else:
            stack.append((cur_sum + numbers[idx], idx + 1))
            stack.append((cur_sum - numbers[idx], idx + 1))
    
    return answer