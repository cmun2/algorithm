def solution(k, ranges):
    #n%2 == 0: 2로 나누기
    #n%3 == 0: 3을 곱하고 1을 더하기
    #n' > 1 다시 작업을 반복
    k_array = [k]
    while k != 1:
        if k % 2 == 0 :
            k /= 2
        else:
            k = k * 3 + 1
        k_array.append(k)
    area = []
    answer = []
    for i in range(len(k_array) - 1):
        area.append((k_array[i] + k_array[i+1])/2)
    for s, e in ranges:
        e = len(area) + e
        if s == e:
            answer.append(0)
        elif s > e:
            answer.append(-1)
        else:
            answer.append(sum(area[s:e]))
    return answer