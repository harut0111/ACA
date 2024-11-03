# task7

def extend_array(array, pad_amount, repeat):
    if pad_amount > len(array): return "invalid padding amount"

    left_part = array[0: pad_amount]
    right_part = array[-pad_amount:]

    left_part *= repeat
    right_part *= repeat

    return left_part + array + right_part

res1 = extend_array([1, 2, 3, 4], 1, 2)
res2 = extend_array([1, 2, 3, 4], 2, 1)
res3 = extend_array([1], 1, 3)
res4 = extend_array([1], 2, 3)

print(res1, res2, res3, res4)