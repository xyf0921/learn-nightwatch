var conf = require('../../nightwatch.conf.BASIC.js')

module.exports = {
  'Demo test todo-list': function (browser) {
    browser
      .url('http://localhost:8080')   // visit the url
      .waitForElementVisible('body') // wait for the body to be rendered
      // 此处省略具体的测试代码。。。
      .saveScreenshot("test.png")
      .end()
  }
}
