# task6
import sys


def find_second_max(li):
    a = -sys.maxsize
    i = [0,0]
    k = 0
    for x in li:
        if x >= a:
            a = x 
            [i[0], i[0]] = [i[1], k]
        k += 1
    print(i)

find_second_max([-23, -98, 0, -456, 12, 8])