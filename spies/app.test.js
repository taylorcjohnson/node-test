const expect = require('expect')
const rewire = require('rewire')

let app = rewire('./app')

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)

  it('should call the spy correctly', () => {
    let spy = expect.createSpy()
    spy('Taylor', 31)
    expect(spy).toHaveBeenCalledWith('Taylor', 31)
  })

  it('should call saveUser with user object', () => {
    let email = 'some@email.com'
    let password = 'abc123'

    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({
      email,
      password
    })
  })
})
