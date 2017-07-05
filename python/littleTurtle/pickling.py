import pickle

my_list = ['xyz', 123, 'bbc', ['hello', 'lady']]
pkl_file = open('my_list.pkl', 'wb')
pickle.dump(my_list, pkl_file)
pkl_file.close
pkl_file = open('my_list.pkl', 'rb')
my_list2 = pickle.load(pkl_file)
print(my_list2)
