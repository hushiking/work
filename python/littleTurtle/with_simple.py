class Sample:
    def __enter__(self):
        print("In__enter__()")
        return "Foo"

    def __exit__(self, type, value, trace):
        print("In__exit__()")
        return 'bbc'


def get_sample():
    return Sample()


with get_sample() as sample:
    print("sample:", sample)
