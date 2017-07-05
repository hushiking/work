def c2f(cel):
    return cel * 1.8 + 32


def f2c(fah):
    return (fah - 32) / 1.8


def test():
    print("测试，0摄氏度 = %.2f华氏度" % c2f(0))
    print("测试，0华氏度 = %.2f摄氏度" % f2c(0))


if __name__ == '__main__':
    test()
