def binary_search(search_list, target):
    left = 0
    right = len(search_list) - 1
    while left <= right:
        mid = int((left + right) / 2)
        if search_list[mid] < target:
            left = mid + 1
            continue
        if search_list[mid] == target:
            return mid
        if search_list[mid] > target:
            right = mid - 1
    return None


# search_list = [4, 6, 7, 8, 9]
search_list = [9, 8, 7, 6, 4]
print(binary_search(search_list, 1))
print(binary_search(search_list, 6))
print(binary_search(search_list, 7))
