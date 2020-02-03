import random
import time

start_time = time.time()

def is_Pyth_triple(list):
    if list[2]**2 == list[0]**2 + list[1]**2: return True
    return False


li = []

ran_num = random.randrange(1,100)
i = 0
while(len(li) <= 49):
    current_li = []
    for a in range(3):
        current_li.append(random.randrange(1,100))
        current_li.sort()
    if current_li not in li and is_Pyth_triple(current_li):
        li.append(current_li)
        print(current_li)
    i += 1

end_time = time.time()
print(li)
print("length = ", len(li))
print("iterations = ", i)
print("execution_time = ", end_time - start_time)

