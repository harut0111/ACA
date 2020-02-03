def fib_seq(n):
    seq = []
    def calc_seq(n):
        return n if n <= 1 else calc_seq(n-1) + calc_seq(n-2)
    for i in range(n):
        seq.append(calc_seq(i))
    return seq
# test
print(fib_seq(10))