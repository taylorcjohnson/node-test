// Command to run: npm test (redefined test script in package.json)
// Continuous testing: nodemon --exec 'npm test'
// Moved to 'npm run test-watch'
const expect = require("expect")

const utils = require("./utils")

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      let res = utils.add(33, 11)

      expect(res)
        .toBeA("number")
        .toBe(44)
    })
  })

  it("should async add two numbers", done => {
    utils.asyncAdd(33, 11, sum => {
      expect(sum)
        .toBe(44)
        .toBeA("number")
      //by passing done into the test, mocha can understand the async nature and only check after done() is called.
      done()
    })
  })

  it("should square a number", () => {
    let res = utils.square(10)

    expect(res)
      .toBeA("number")
      .toBe(100)
  })

  it("should async square a number", done => {
    utils.asyncSquare(100, squared => {
      expect(squared)
        .toBeA("number")
        .toBe(100)
      done()
    })
  })
})

it("should expect a value", () => {
  //expect(12).toNotBe(11)
  //expect({name: 'Taylor'}).toNotEqual({name: 'taylor'})
  //expect([2,3,4]).toInclude(3)
  expect({
    name: "Taylor",
    age: 31,
    location: "Florida"
  }).toExclude({
    age: 32
  })
})

it("should verify first and last names are set", () => {
  let person = {
    age: 31,
    location: "Florida",
    firstName: "Bob",
    lastName: "Boberts"
  }
  let res = utils.setName(person, "Taylor Johnson")

  expect(res)
    .toBeA("object")
    .toInclude({
      firstName: "Taylor",
      lastName: "Johnson"
    })
})
