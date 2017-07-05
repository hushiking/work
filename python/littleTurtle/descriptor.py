# 描述符类
class MyDescriptor:
    # self表示描述符对象x,instance表示下文Test类的实例test,owner表示实例的拥有者Test类
    def __get__(self, instance, owner):
        print('getting...', self, instance, owner)

    def __set__(self, instance, value):
        print('setting...', self, instance, value)

    def __delete__(self, instance):
        print('deleting...', self, instance)


class Test:
    x = MyDescriptor()


test = Test()
# print(test.x, '==' * 10)  # 无返回值, 会返回None
test.x
print(test)
print(Test)
print(MyDescriptor)
test.x = 'xxx'
del test.x
