def calc_seq(n):
    return n if n <= 1 else calc_seq(n-1) + calc_seq(n-2)

# test
print(calc_seq(0))
print(calc_seq(2))
print(calc_seq(10))
print(calc_seq(20))