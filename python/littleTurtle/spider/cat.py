import urllib.request

req = urllib.request.Request('http://placekitten.com/500/600')
print(req)
res = urllib.request.urlopen(req)
print(res)
cat_img = res.read()
with open('cat_500_600.jpg', 'wb') as f:
    f.write(cat_img)
