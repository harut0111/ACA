# ------- task 3 ------
def getSeq(n, i):
    sum = 0
    for x in range(0, i):
        sum += n
    return str(sum)

def getNumber(num, i = 3):
    ostr = ''
    j=0
    for y in range(0, i):
        j += 1
        ostr += getSeq(num, j)
    return int(ostr)
    
#test
print(getNumber(3))
print(getNumber(17))
print(getNumber(1000))