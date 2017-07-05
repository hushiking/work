class Rectangle:
    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height

    def __setattr__(self, name, value):
        if name == 'square':
            self.width = value
            self.height = value
        else:
            # self.name = value  # 报错,__setattr__自己调用自己,死循环
            # super().__setattr__(name, value)
            self.__dict__[name] = value

    def getArea(self):
        return self.width * self.height


r = Rectangle(4, 5)
print(r.getArea())
r.square = 10
print(r.getArea())
