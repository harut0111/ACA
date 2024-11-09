def detect_sign(*nums):
    if nums.count(0): return "unsigned"
    my_str = "".join(str(nums))
    N = my_str.count("-")
    if N % 2 == 0: return "+"
    return "-"
    
#test
print(detect_sign(-14,5,0, 10))
print(detect_sign(-8, 9, -6))
print(detect_sign(4, 19, -2))