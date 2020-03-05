def prodInArr(arrOfarr):
    res = 1
    def getMin(arr):
        minNum = min(arr)
        if minNum < 0: return minNum
        return False

    for arr in arrOfarr:
        if not isinstance(arr, list): return "Invalid Argument"
        curr = getMin(arr)
        if curr: res *= curr
    if res == 1: return "No Negatives"
    return res

array1 = [[2, -9, -3, 0], [1, 2], [-4, -11, 0]]
array2 = [[3, 4], [11, 0], [5, 6, 7, 8]]
array3 = [1, 2, 3]
print(prodInArr(array1))
print(prodInArr(array2))
print(prodInArr(array3))