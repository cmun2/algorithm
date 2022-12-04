from collections import deque 
def solution(prices):
    answer = [] #결과를 저장할 빈배열
    prices = deque(prices) #주식가격의 진행도 큐 형식인데 popleft()함수를 써야함
    while prices:          #prices에 의해
        time = 0            #time을 설정
        price = prices.popleft()        #들어오는 price를 왼쪽부터 제거
        for price_stock in prices:
            time += 1
            if price_stock < price:
                break
        answer.append(time)
    return answer
print(solution([1,2,3,2,3]))