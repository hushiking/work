def save_file(boy, girl, count):
    file_name_boy = 'boy_%d.txt' % count
    file_name_girl = 'girl_%d.txt' % count

    boy_file = open(file_name_boy, 'w')
    girl_file = open(file_name_girl, 'w')

    boy_file.writelines(boy)
    girl_file.writelines(girl)


def split_file(file_name):
    f = open(file_name)

    boy = []
    girl = []
    count = 1

    for each_line in f:
        if each_line[:5] != '=====':
            (role, line_say) = each_line.split(':', 1)
            if role == '小甲鱼':
                boy.append(line_say.lstrip())
            if role == '小客服':
                girl.append(line_say.lstrip())
        else:
            save_file(boy, girl, count)

            boy = []
            girl = []
            count += 1

    save_file(boy, girl, count)

    f.close()


split_file('molest.txt')
