let body = document.body
let arr = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple']
setInterval(() => {
    let random = parseInt(Math.random() * arr.length)
    console.log('>>>', random)
    body.style.color = arr[random]
}, 2000)