# task1
import math

def is_prime(n):
    if type(n) is not int or n < 2 or n == 4: return "No"
    elif n == 2 or n == 3: return "Yes"
    for i in range(2, math.ceil(math.sqrt(n))):
        if n % i == 0: return "No" 
    return "Yes"
# test
for j in range(55):
    print(j, " ? ", is_prime(j))