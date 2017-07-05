# -*- coding: utf-8 -*-
import urllib.request
import json
# from io import StringIO
import gzip

county = input('请输入城市:')
county = urllib.request.quote(county)
print(county)
url = 'http://wthrcdn.etouch.cn/weather_mini?city=' + county
res = urllib.request.urlopen(url)  # http.client.HTTPResponse(字节流)
# res = urllib.request.Request(url)  # 返回一个存储流数据的内存地址
# page = urllib.request.urlopen(res)  # 两步相当于上面一步
print(type(res))
# res = StringIO(res)
gz = gzip.GzipFile(fileobj=res)
print(type(gz))
data = gz.read().decode('utf-8')
print(type(data))
weatherJSON = json.loads(data)
# weatherJSON = json.dumps(weatherJSON)
# weatherJSON = json.JSONDecoder().decode(data)
yesterday = weatherJSON['data']['yesterday']
city = weatherJSON['data']['city']
forecast = weatherJSON['data']['forecast']
temperature = weatherJSON['data']['wendu']
cold = weatherJSON['data']['ganmao']

print('城市: %s' % city)
print('日期: %s' % forecast[0]['date'])
print('天气: %s' % forecast[0]['type'])
print('当前温度: %s' % temperature)
print('高温: %s℃' % forecast[0]['high'])
print('低温: %s℃' % forecast[0]['low'])
print('风力: %s' % forecast[0]['fengli'])
print('注意: %s' % cold)
