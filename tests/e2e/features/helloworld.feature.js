var homepage = require('../pages/home.page.js')

describe('Hello Babylon', function() {
  it('displays Hello Babylon on the landing', function() {
    homepage.get()
    expect(homepage.getGreeting()).toEqual('Hello Babylon')
    expect(browser.getCurrentUrl()).toEqual(homepage.url)
  })
})
