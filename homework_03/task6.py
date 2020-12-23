def reverseTriօ(str):
    s = list(str)
    k = 0
    while k < len(str) - 4: 
        [s[k], s[k+2]] = [s[k+2], s[k]]
        k += 3
    return "".join(s)
print(reverseTriօ("dfgjkloypOO"))
print(reverseTriօ("aweyoolp"))