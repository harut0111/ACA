# task12
def get_area(name, n1,n2):
    if name == "triangle": return (n1 * n2) / 2
    elif name == "rectangle": return n1 * n2
    return "check the name"
print(get_area('triangle', 6, 7))
print(get_area('rectangle', 8, 5))