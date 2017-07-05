a = 1
while a != 10:
    print(a)
    a += 1
#range函数表示[1, 10)之间的整数
for a in range(1, 10):
    for b in range(1, 10):
        print(a, b)
        if b == 5:
            break
        print('内循环')
    print('外循环')
