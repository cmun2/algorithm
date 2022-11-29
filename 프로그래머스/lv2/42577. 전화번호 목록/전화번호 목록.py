def solution(phone_book):
    #1: sorting 후 loop
    phone_book.sort() #순서대로 sorting #119, 97674223, 1195524421
    #2 : loop돌리기 한 방향으로
    for p1, p2 in zip(phone_book, phone_book[1:]):
        if p2.startswith(p1):
            return False
    return True
print(solution(["119", "97674223", "1195524421"]))