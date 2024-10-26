def solution(distance, rocks, n):
    rocks.sort()
    rocks.append(distance)
    
    left, right = 1, distance    
    answer = 0
    
    while left <= right:
        mid = (left + right) // 2
        prev = 0 # 출발지점
        remove_cnt = 0 # 제거한 바위 수 
        
        # 바위제거
        for rock in rocks:
            if rock - prev < mid: # 현재 바위와 이전 바위의 거리가 mid보다 작으면
                remove_cnt += 1   # 바위 제거
            else:
                prev = rock # 바위를 제거하지 않으면 현재 바위가 이전 바위가 된다
                
        if remove_cnt > n: # 제거한 바위가 너무 많으면
            right = mid - 1 # 가능한 최소 거리를 줄이기
        else: # 제거한 바위가 같거나 적을시
            answer = mid
            left = mid + 1
                
    return answer