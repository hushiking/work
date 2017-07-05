def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)


num = int(input("请输入一个正整数:"))
result = factorial(num)
print("%d 的阶乘是: %d" % (num, result))
