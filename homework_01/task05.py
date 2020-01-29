# task 3
def getAver(*nums):
    sum = 0
    for x in nums:
        sum += x
    return sum/len(nums)

#test
print(getAver(45, -12, 0, 3, -15))
print(getAver(7, 52, -23, 9, -81))