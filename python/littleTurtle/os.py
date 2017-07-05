import os

print(os.getcwd())
os.chdir('/Users/hushiking/hu/python/testPython')
print(os.getcwd())
print(os.listdir('.'))  # 列出当前目录所有文件夹
# os.remove('文件名')  # 删除文件
# os.rmdir('new/a/b')  # 删除单层目录(必须是空目录)
# os.rmdir('new/a')
# os.removedirs('new/a/b')  # 递归删除目录
# os.mkdir('new')  # 创建单层目录, 若已存在抛出异常
# os.makedirs('new/a/b')  # 递归创建多层目录, 若该目录已存在抛出异常
# os.rename('new', 'renew') # 重命名
# os.system('text')  # 运行系统shell命令
print(os.listdir(os.curdir))  # 当前目录
print(os.listdir(os.pardir))  # 父目录
print(os.sep)  # 输出路径分隔符
print(os.linesep)  # 行终止符
print(os.name)  # 指代当前操作系统
