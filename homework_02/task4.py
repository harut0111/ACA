def calc_product(n):
    if n == 0: return "Can not Calculate"
    sum = 0
    product = 1
    numlist = [int(x) for x in str(n)]
    
    for i in numlist:
        sum += i
        product *= i

    reminder =  product % sum
    if reminder == 0:
        return "Quotient is {}".format(product / sum)
    return "Reminder is {}".format(reminder)
# test
print(calc_product(1233))
print(calc_product(5))
print(calc_product(0))
print(calc_product(455))