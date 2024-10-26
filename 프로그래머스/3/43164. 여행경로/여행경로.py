def solution(tickets):
    # 항공권 정보를 저장할 그래프
    graph = {}
    
    # 그래프를 만들고 사전순으로 정렬
    for ticket in tickets:
        if ticket[0] in graph:
            graph[ticket[0]].append(ticket[1])
        else:
            graph[ticket[0]] = [ticket[1]]
    
    for key in graph:
        graph[key].sort(reverse=True)  # 역순으로 정렬
    
    route = []  # 경로를 저장할 리스트
    stack = ['ICN']  # 스택에 초기 공항을 넣고 시작
    
    while stack:
        airport = stack[-1]  # 스택의 최상단 공항을 확인
        
        # 현재 공항에서 더 갈 곳이 없다면 경로에 추가
        if airport not in graph or not graph[airport]:
            route.append(stack.pop())  # 스택에서 꺼내 경로에 추가
        else:
            # 갈 수 있는 공항이 있다면 그 공항을 스택에 추가
            stack.append(graph[airport].pop())
    
    # 경로는 역순으로 저장되므로 뒤집어서 반환
    return route[::-1]