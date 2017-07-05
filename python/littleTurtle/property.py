class C:
    def __init__(self, size=10):
        self.size = size

    def getSize(self):
        return self.size

    def setSize(self, value):
        self.size = value

    def delSize(self):
        del self.size
    # 绑定属性x与属性size
    x = property(getSize, setSize, delSize)


c = C()
print(c.size)
c.x = 28
print(c.size)
c.size = 30
print(c.x)
del c.x
print(c.size)
