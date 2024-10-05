import sys

def load_data():
    input_data = sys.stdin.read().strip().split()
    divisiors = list(map(int, input_data[1:]))
    n = min(divisiors) * max(divisiors)
    print(n)

if __name__ == '__main__':
    load_data()