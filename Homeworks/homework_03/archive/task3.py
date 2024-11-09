def getNumbers(li):
    num, st= 0, 0
    for x in li:
        if isinstance(x, str): st += 1
        else: num += 1
    return f"Numbers: {num}, Strings: {st}"
print(getNumbers([1, "10", "hi", 2,3 ]))
print(getNumbers([1, 4, "I am a string", "456"]))