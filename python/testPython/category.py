class Chair:
    color = 'red'
    isBack = True

    def sit(self, name):
        print(name)


chair = Chair(size='blue')
chair.sit('板凳')
print(chair.size)
