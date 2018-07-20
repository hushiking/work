class Test {
  constructor() {
    this.a = 'hello world'
  }
}

let test = new Test()
document.getElementsByTagName('h2')[0].innerHTML = `<a href='http://www.baidu.com'>${test.a}</a>`