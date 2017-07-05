class Human(object):
    taisheng = True
    def __init__(self, name):
        self.name = name
    
human_a = Human('alan')
print(human_a.name)
print(human_a.taisheng)
print(Human.taisheng)
