def solution(N, stages):
    result = []
    
    for i in range(1, N + 1):
        # 해당 stage에 도달한 플레이어 수 (i 이상)
        reached = len([x for x in stages if x >= i])
        # 해당 stage에서 실패한 플레이어 수 (i에 해당하는)
        uncleared = len([x for x in stages if x == i])
        
        # 실패율 계산
        if reached == 0:
            loss = 0  # reached가 0일 경우 실패율은 0으로 처리
        else:
            loss = uncleared / reached
        
        result.append([i, loss])
    
    # 실패율 내림차순으로 정렬하고, 실패율이 높은 순서대로 stage 번호 반환
    return [x[0] for x in sorted(result, key=lambda x: x[1], reverse=True)]

# 예시 실행
N = 5
stages = [2, 1, 2, 6, 2, 4, 3, 3]
print(solution(N, stages))