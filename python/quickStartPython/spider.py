import re
from urllib import request
res = request.urlopen('http://blog.leanote.com/qq-alan')
html = res.read()
html = html.decode('utf-8')
m = re.findall(r'<div class="title">.*?title="全文">(.*?)</a>', html, re.S)
for t in m:
    print(t)
