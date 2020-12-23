# task 3
def sortAscendig(*nums):
    my_arr = list(nums)
    print("initial list -->", my_arr)
    j = 1
    k = 0
    while(j > 0):
        k += 1
        j = 0
        for i in range(len(my_arr) - 1):
            if my_arr[i+1] < my_arr[i]:
                [my_arr[i], my_arr[i+1]] =  [my_arr[i+1], my_arr[i]]
                j += 1
    print("all sorting attempts -->", k)
    return my_arr
#test
print(sortAscendig(45, -12, 0, 3, -15))
print(sortAscendig(-23, -456, 0))