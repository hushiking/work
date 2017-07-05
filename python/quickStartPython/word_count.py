f = open('../test.txt')
lines = f.readlines()
print(lines)
count = {}
for line in lines:
    tokens = line.strip().split(' ')
    for token in tokens:
        if token not in count:
            count[token] = 0
        count[token] += 1
for word in count:
    print(word, count[word])
