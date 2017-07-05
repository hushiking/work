import sys
sys.path.append('/Users/hushiking/hu')
from python.hello import a
from python.hello.hello_b import b
if __name__ == '__main__':
    a.hello_a()
    b.hello_b()
