#task 08
import math
def solv_quadratic_equation(a, b, c):
    if not a: return "Enter valid constans"
    else:
        d = pow(b, 2) - 4*a*c
        if d == 0:
            x = -b / 2 * a
            return "Solution is {}".format(x)
        elif d < 0:
            return "Solution does not exists"
        x1 = ((-b - math.sqrt(d)) / (2 * a))
        x2 = ((-b + math.sqrt(d)) / (2 * a))
        return "Solution are {0} and {1}".format(x1, x2)
# test
print(solv_quadratic_equation(1, 2, 1))
print(solv_quadratic_equation(0, 4, -5))
print(solv_quadratic_equation(3, -8, 12))
print(solv_quadratic_equation(5, -13, 6))