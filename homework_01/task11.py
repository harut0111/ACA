# task 11

# solution by strings
# def revers_dig(n):
#     nstr = list(str(n))
#     l = len(nstr)
#     if l == 1 or nstr[(l-1)] == "0": return n
#     else:
#         [nstr[0], nstr[(l - 1)]] = [nstr[(l - 1)], nstr[0]]
#         return "".join(nstr)
# test
# print(revers_dig(1))
# print(revers_dig(120))
# print(revers_dig(12))


# solution by numbers (bad solution)
def revers_dig(n):
    lis = [int(d) for d in str(n)]
    l = len(lis)
    if l == 1 or not lis[(l - 1)]: return n
    
    [lis[0], lis[l-1]] = [lis[l-1], lis[0]]
    return int("".join(map(str, lis))) 
# test
print(revers_dig(1))
print(revers_dig(120))
print(revers_dig(12))

