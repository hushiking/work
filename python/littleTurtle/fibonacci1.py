def fibonacci(n):
    if n < 1:
        print("输入有误!")
        return -1

    if n == 1 or n == 2:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


result = fibonacci(20)
if result != -1:
    print("总共有%d对兔子诞生~" % result)
