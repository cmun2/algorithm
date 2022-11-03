from collections import Counter 
def solution(participant, completion):
    #participant 갯수
    part_counter = Counter(participant)
    #completion 갯수
    comp_counter = Counter(completion)
    answer = part_counter - comp_counter
    answer = list(answer.keys())[0]
    return answer
    
print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))