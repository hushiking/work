import random

# 随机生成1~10之间的整数，包括1和10
secret = random.randint(1, 10)
print("---------------开始游戏----------------")
flag = False
count = 0
while not flag:
    count += 1
    print(count)
    if count > 3:
        print("日，你居然还没猜出来，你已经出局了！")
        break
    temp = input("猜我心里想的数字：")
    print(type(temp))
    print(type(temp) is str)
    print(isinstance(temp, int))
    guess = int(temp) or 0
    if guess == secret:
        flag = True
        print("卧槽，你是我肚子里的蛔虫吗？")
        print("哼，猜中了也没有奖励哦~")
    elif guess > secret:
        print("哥们，你猜大了~~~")
    else:
        print("嘿，小了，小了~~~")
print("游戏结束，不玩啦^_^")
