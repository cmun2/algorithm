def solution(numbers, target):
    answer = 0 #최종타겟넘버 가능수 저장변수
    result = [0] #계산결과를 담을 리스트
    for num in numbers: 
        temp = [] #임시저장 리스트
        for r in result: #각 값마다 더하고 빼고를 반복하기위해 반복
            temp.append(r+num)
            temp.append(r-num)
        result = temp
    for r in result: # 순회하며 타겟값과 같은 값이 있을 경우 카운트 증가
        if r == target:
            answer += 1
    return answer