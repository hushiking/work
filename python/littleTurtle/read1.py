f = open('../test.txt')
for line in f:
    print(line)

f.seek(10, 0)
print(f)
# lines = f.readline(100)
# print(lines)
lines = list(f)
print(lines)
count = 0
for line in lines:
    count += 1
    print('第%d行:' % count, line)

f.close()
