class CountList:
    def __init__(self, *args):
        self.values = [x for x in args]
        self.count = dict.fromkeys(range(len(self.values)), 0)

    def __len__(self):
        return len(self.values)

    def __getitem__(self, key):
        self.count[key] += 1
        return self.values[key]


list1 = CountList(1, 3, 5, 7, 9)
list2 = CountList(2, 4, 6, 8, 10)
print(list1[1])
print(list2[1])
print(list1[1] + list2[2])
list1.count
print(list1.count)
print(list2.count)
