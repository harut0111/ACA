from itertools import combinations

def get_Pythagorean_Triples(n):

    dic = {x : x**2 for x in range(1,n + 1)}

    def get_all_combinations(s):

        num_sequance = [i for i in range(s, n + 1)]
        comb = combinations(num_sequance, 3)
        combLi = list(comb)
        return combLi

    def is_Pyth_triple(li):

        # if li[2]**2 == li[0]**2 + li[1]**2: return True

        # optimized
        if dic[li[2]] == dic[li[0]] + dic[li[1]]: return True
        return False

    res = []
    for triple in get_all_combinations(1):
        if is_Pyth_triple(triple): res.append(triple)

    return res

print(get_Pythagorean_Triples(500))




# import time
# def get_Pythagorean_Triples(n):
#     start_time = time.time()
    
#     res = []

#     def is_Pyth_triple(list):
#         if list[2]**2 == list[0]**2 + list[1]**2: return True
#         return False

#     iter = 0
#     for i in range(1,n):
#         for j in range(1,n):
#             if i == j: continue
#             for k in range(1,n):
#                 if j == k or k == i: continue
#                 curLis = [i,j,k]
#                 curLis.sort()
#                 iter += 1
#                 if curLis not in res and is_Pyth_triple(curLis):
#                     res.append(curLis)
  
#     return({
#         "result": res, 
#         "N": len(res), 
#         "execution time": time.time() - start_time, 
#         "iterations": iter
#     })

# print(get_Pythagorean_Triples(100))




# by random numbers

# import random
# import time

# start_time = time.time()

# def is_Pyth_triple(list):
#     if list[2]**2 == list[0]**2 + list[1]**2: return True
#     return False


# li = []

# ran_num = random.randrange(1,100)
# i = 0
# while(len(li) <= 49):
#     current_li = []
#     for a in range(3):
#         current_li.append(random.randrange(1,100))
#         current_li.sort()
#     if current_li not in li and is_Pyth_triple(current_li):
#         li.append(current_li)
#         print(current_li)
#     i += 1

# end_time = time.time()
# print(li)
# print("length = ", len(li))
# print("iterations = ", i)
# print("execution_time = ", end_time - start_time)
