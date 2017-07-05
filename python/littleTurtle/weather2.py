# coding=utf-8
import requests
import json

# county = input('请输入城市:')
# county = urllib.request.quote(county)
# url = 'http://wthrcdn.etouch.cn/weather_mini?city=' + county
# print(url)
# result = urllib.request.urlopen(url)  # 返回一个存储流数据的内存地址
# weather = result.read().encode('utf-8')
# print(weather)
# weatherJSON = json.JSONDecoder().decode(weather)
# yesterday = weatherJSON['data']['yesterday']
# city = weatherJSON['data']['city']
# forecast = weatherJSON['data']['forecast']
# temperature = weatherJSON['data']['wendu']
# cold = weatherJSON['data']['ganmao']

# print('北京: %s' % city)
# print('日期: %s' % forecast[0]['date'])
# print('天气: %s' % forecast[0]['type'])
# print('当前温度: %s' % temperature)
# print('高温: %s℃' % forecast[0]['high'])
# print('低温: %s℃' % forecast[0]['low'])
# print('风力: %s' % forecast[0]['fengli'])
# print('注意: %s' % cold)
county = input('请输入城市:')
result = requests.get('http://wthrcdn.etouch.cn/weather_mini?city=' + county)
weather = json.loads(result.text)
print(weather)
yesterday = weather['data']['yesterday']
city = weather['data']['city']
forecast = weather['data']['forecast']
temperature = weather['data']['wendu']
cold = weather['data']['ganmao']

print('北京: %s' % city)
print('日期: %s' % forecast[0]['date'])
print('天气: %s' % forecast[0]['type'])
print('当前温度: %s' % temperature)
print('高温: %s' % forecast[0]['high'])
print('低温: %s' % forecast[0]['low'])
print('风力: %s' % forecast[0]['fengli'])
print('注意: %s' % cold)
