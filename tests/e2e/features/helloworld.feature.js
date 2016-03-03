describe('Hello Babylon', function() {
  it('displays Hello Babylon on the landing', function() {
    browser.get('http://localhost:8080');
    var greeting = element(by.css('h1'))
    expect(greeting.getText()).toEqual('Hello Babylon')
  })
})
