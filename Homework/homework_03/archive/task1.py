import numpy as np 

def printX(w,h):
    res = ''
    for i in np.arange(-w,w+1, 1):
        for j in np.arange(-h,h+1, 1):
            if j == 0:
                if i == j: res += "*"
                else: continue
            # elif abs(i)/abs(j) == w/h: res += "*"

            # more deep
            elif format(abs(i)/abs(j), '.5f') == format(w/h, '.5f'): res += "*"
            else: res += " "
        res += "\n"
    return res
print(printX(10,15))