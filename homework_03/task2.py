def get_frequency(li):
    l = len(li)
    res = []
    for x  in list(set(li)):
        k = 0
        for y  in li:
            if x == y: k += 1
        res.append({x: k/l})
    return res

print(get_frequency([1,1,2,2,3]))
print(get_frequency([4,4]))
print(get_frequency([1,2,3]))