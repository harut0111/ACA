# ---- task 2 ----
def isDivisible(n1,n2):
    li = [n1,n2]
    li.sort()
    print(li)
    if li[1] % li[0] == 0: return 1
    return 0

print(isDivisible(7,21))