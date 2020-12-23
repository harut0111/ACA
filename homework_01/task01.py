# ---- task 1 ----
def isOdd(numb):
    if numb % 2 == 0: return("even")
    return "odd"
# test
for x in range(1, 10):
    print(x, "is", isOdd(x))