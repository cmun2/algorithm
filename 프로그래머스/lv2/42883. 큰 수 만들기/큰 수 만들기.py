def solution(number, k):
    answer = []
    for num in number:
        while answer and k > 0 and answer[-1] < num:
            answer.pop()
            k -= 1
        answer.append(num)
    answer = ''.join(answer[:len(number)-k])
    return answer