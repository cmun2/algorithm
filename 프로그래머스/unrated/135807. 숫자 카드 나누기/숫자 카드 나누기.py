from math import gcd

def solution(arrayA, arrayB):
    gcd_a = arrayA[0]
    gcd_b = arrayB[0]
    for i in range(1, len(arrayA)):
        gcd_a = gcd(arrayA[i], gcd_a)
        gcd_b = gcd(arrayB[i], gcd_b)
        
    if gcd_a != 1:
        for b in arrayB:
            if b % gcd_a == 0:
                gcd_a = 1
                break
    if gcd_b != 1:
        for a in arrayA:
            if a % gcd_b == 0:
                gcd_b = 1
                break
    return max(gcd_a, gcd_b) if max(gcd_a, gcd_b) != 1 else 0