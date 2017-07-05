import re

fopen = open('../test.txt', 'r')
f = fopen.read().strip()

print("输出test.txt文件内容")
print(f)
print("=====" * 10)

print("贪婪匹配,re.S('.'匹配任意字符,包括换行符)")
print(re.findall("AAA(.*)CCC", f, re.S))
print("=====" * 10)

print("非贪婪匹配,re.S('.'匹配任意字符,包括换行符)")
list = re.findall("AAA(.*?)CCC", f, re.S)
print(list)
print("=====" * 10)

print("多行贪婪匹配,re.S('.'匹配任意字符,但不包括换行符)")
print(re.findall("AAA(.*)CCC", f, re.M))
print("=====" * 10)

print("多行非贪婪匹配,re.S('.'匹配任意字符,但不包括换行符)")
list = re.findall("AAA(.*?)CCC", f, re.M)
print(list)
print("=====" * 10)

print("re.M匹配多行,这里把换行符匹配掉")
for i in list:
    print(re.findall("(\d+)", i, re.M))
print("=====" * 10)

print("把匹配出来的字段放到一个数组")
array = []
for lst in list:
    re_list = re.findall("(\d+)", lst, re.M)
    for i in re_list:
        array.append(i)
for i in array:
    print(i)
