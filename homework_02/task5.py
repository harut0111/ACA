import numpy

def evenly_spaced(a,b, num):
    if not num - 1:
        return [a]
    space = ( b - a ) / ( num - 1 )

    res = []
    
    for x in numpy.arange(a, b, space):
        res.append(float(format(x, '.1f')))
    res.append(b)
    return res
# test
print(evenly_spaced(1,5,1))
print(evenly_spaced(10,100,3))
print(evenly_spaced(1,5,6))