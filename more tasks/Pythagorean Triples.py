def get_Pythagorean_Triples(n):

    res = []
    def is_Pyth_triple(list):
        if list[2]**2 == list[0]**2 + list[1]**2: return True
        return False

    for i in range(1,n):
        for j in range(1,n):
            if i == j: continue
            for k in range(1,n):
                if j == k or k == i: continue
                curLis = [i,j,k]
                curLis.sort()
                if curLis not in res and is_Pyth_triple(curLis):
                    res.append(curLis)
    return(res)

res = get_Pythagorean_Triples(100)
print(res, 'legth = ', len(res))