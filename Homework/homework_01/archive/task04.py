# task 3
def strBorRev(num):
    a = list(str(num))
    print(a)
    [a[0], a[len(a) - 1]] = [a[len(a) - 1], a[0]] # destructure assignement
    return int("".join(a))

def revDig(num):
    if num % 10 == 0:
        return num
    return strBorRev(num)
#test
print(revDig(70))
print(revDig(7))
print(revDig(56))