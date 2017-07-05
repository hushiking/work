def discount(price, rate):
    final_price = price * rate
    # print("试图打印全局变量old_price的值:", old_price)
    # UnboundLocalError: local variable 'old_price' referenced before
    # assignment
    old_price = 50
    print("函数内部修改old_price的值是:", old_price)
    return final_price


old_price = float(input("请输入原价:"))
rate = float(input("请输入折扣率:"))
new_price = discount(old_price, rate)
print("外部打印old_price的修改值是:", old_price)
print("打折后价格是:", new_price)
