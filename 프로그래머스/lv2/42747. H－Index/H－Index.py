# def solution(citations):
#     citations.sort()
#     for i in range(len(citations)):
#         if (citations[i] >= len(citations)-i):
#             return (len(citations)-i)

def solution(citations):
    citations = sorted(citations)
    citation = len(citations)
    for i in range(citation):
        if citations[i] >= citation - i:
            return citation - i
    return 0