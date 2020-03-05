def getLongestSubstr(sentence):
    result = ''
    max_length = -1
    for x in range(0, len(sentence)):
        dataRegister = []
        for y in range(x, len(sentence)):
            if sentence[y] == " " or sentence[y] not in dataRegister: 
                dataRegister.append(sentence[y])
            else:
                if len(dataRegister) >= max_length:
                    max_length = len(dataRegister)
                    result = "".join(dataRegister)
                break
    return result

str1 = "there are no two words in the english language more harmful than \"good job\""
str2 = "parting your soup is not a miracle, bruce"
str3 = "aaaaaaa"
print(getLongestSubstr(str1))
print(getLongestSubstr(str2))
