import urllib.request
import urllib.parse
import json

# words = input('请输入要翻译的内容:')
url = 'http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule&sessionFrom=https://www.baidu.com/link'
data = {
    "i": "中国教育培训产业图谱",
    "from": "AUTO",
    "to": "AUTO",
    "smartresult": "dict",
    "client": "fanyideskweb",
    "salt": "1497924553707",
    "sign": "df04dad4a860b4ed76ab4a7e13fbc7f5",
    "doctype": "json",
    "version": "2.1",
    "keyfrom": "fanyi.web",
    "action": "FY_BY_CLICKBUTTON",
    "typoResult": "true"
}
data = urllib.parse.urlencode(data).encode('utf-8')
res = urllib.request.urlopen(url, data)
ret = res.read().decode('utf-8')
ret = json.loads(ret)
print(ret)
print(type(ret))
print('翻译结果:%s' % ret["translateResult"][0][0]["tgt"])
