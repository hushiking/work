try:
    f = open('data.txt', 'w')
    f.write('我来了')
    for each_line in f:
        print(each_line)
except OSError as reason:
    print('出错啦' + str(reason))
finally:
    f.close()

# 可改写为
try:
    with open('data.txt', 'w') as f:
        f.write('with处理文件读写不用手动关闭文件流')
        for each_line in f:
            print(each_line)
except OSError as reason:
    print('出错啦' + str(reason))
