from collections import deque

def solution(queue1, queue2):
    min_cnt = 0
    queue1 = deque(queue1)
    #deque['3', '2', '7', '2']
    queue2 = deque(queue2)
    sum1 = sum(queue1)
    sum2 = sum(queue2)
    total = sum1 + sum2
    limit = len(queue1) * 4
    
    if total % 2 != 0:
        return -1
    
    while True:
        if sum1 > sum2:
            new_num = queue1.popleft()
            queue2.append(new_num)
            sum1 -= new_num
            sum2 += new_num
            min_cnt += 1
        elif sum1 < sum2:
            new_num = queue2.popleft()
            queue1.append(new_num)
            sum2 -= new_num
            sum1 += new_num
            min_cnt += 1
        else:
            break
        if min_cnt == limit:
            return -1
    return min_cnt