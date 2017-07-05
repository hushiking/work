f = open('../test.txt')
content = f.read()
f.close()
print(content)

m = open('../test.txt')
while True:
    lines = m.readline(20)
    print(lines)
    if not lines:
        break
    for line in lines:
        print(line.strip())

list1 = [1, 3, 5, 7, 9]
for num in list1:
    print(num)
