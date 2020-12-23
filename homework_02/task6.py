# task6

def find_second_max(li):
    max_el = max(li[0], li[1])
    second_max = min(li[0], li[1])
    second_max_index = -1

    for i in range(2, len(li)):
        if li[i] >= max_el: 
            [second_max, max_el] = [max_el, li[i]]
            second_max_index = li.index(second_max)
        else:
            if li[i] > second_max: 
                second_max = li[i]
                second_max_index = i

    return second_max_index
res1 = find_second_max([23, -98, 0, -456, 12, 8])
res2 = find_second_max([-60,2,43,-18,5,-19,36,7,56])
print(res1, res2)


# def find_second_max(li):
#     li_copy = li.copy()
#     li_copy.sort()
#     second_max_el = li_copy[-2]
#     return li.index(second_max_el)

# res1 = find_second_max([23, -98, 0, -456, 12, 8])
# res2 = find_second_max([-60,2,43,-18,5,-19,36,7,56])
# print(res1, res2)