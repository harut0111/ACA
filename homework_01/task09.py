# task09
import math

def simple_func(n):
    i = 0
    j = 0
    if n % 2 == 0 and not math.floor(n / 10): i += 1
    elif n % 3 == 0 and n % 10 == 1: j += 1
    return [i,j]

for x in range(15):
    print(x, " --> ", simple_func(x))