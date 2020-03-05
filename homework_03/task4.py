import re
def getLongestWord(sentence):
    arr_of_words = re.split(", | ", sentence)
    maxLength = -1
    result = None
    for word in arr_of_words:
        if len(word) >= maxLength:
            result = word
            maxLength = len(word)
    return result
print(getLongestWord("A revolution without dancing is a-revolution nooooooooooooooooot worth having"))
print(getLongestWord("Which would be worse - to live as a monster, or to die as a good man?"))