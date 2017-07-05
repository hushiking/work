try:
    # int('abc')
    f = open('boy_1.txt', 'w')
    print(f.write('好冷啊'))
    print(f.read())
    sum = 1 + '1'
    f.close()
except OSError as reason:
    print('文件出错啦T_T\n错误原因是:' + str(reason), '==' * 10, type(reason))
except TypeError as reason:
    print('类型出错啦T_T\n错误原因是:' + str(reason), '==' * 10, type(reason))
else:
    print('没有异常')
finally:
    f.close()
    print('这里收个尾')
# f.close()  # 写在这里也可行
print('来来来,见面分一半')
raise ZeroDivisionError('除数不能为0')  # 直接手写产生异常
