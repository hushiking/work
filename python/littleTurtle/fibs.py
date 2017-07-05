def fibs():
    a = 0
    b = 1
    while True:
        a, b = b, a + b
        yield a


for each in fibs():
    if each > 100:
        break
    print(each, end=' ')  # 表示打印结果用空格分开
