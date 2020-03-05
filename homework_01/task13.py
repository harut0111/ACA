def diffMaxMin(num):
    listOfNum = [int(x) for x in str(num)]
    return max(listOfNum) - min(listOfNum)
# test
print(diffMaxMin(5))
print(diffMaxMin(152))
print(diffMaxMin(4593653))