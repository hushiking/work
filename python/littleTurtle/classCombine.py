class Turtle:
    def __init__(self, x):
        self.num = x


class Fish:
    def __init__(self, x):
        self.num = x


class Pool:
    def __init__(self, x, y):
        self.turtle = Turtle(x)
        self.fish = Fish(y)

    def print_num(self):
        print("水池里总共有乌龟 %d 只和小鱼 %d 条!" % (self.turtle.num, self.fish.num))


pool = Pool(2, 11)
pool.print_num()
