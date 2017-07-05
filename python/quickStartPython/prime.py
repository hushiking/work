def judge(x):
    for i in range(2, x):
        if x % i == 0:
            return False
    return True
print(judge(99))
for i in range(2, 101):
    if judge(i):
        print(i)
