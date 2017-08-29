const request = require("supertest")
const expect = require("expect")

let app = require("./server").app

// Server
// GET /
// some test case
// GET /users
// some test case

describe("Server", () => {
  describe("GET /", () => {
    it("should return hello world response", done => {
      request(app)
        .get("/")
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({
            error: "Page not found."
          })
        })
        .end(done)
    })
  })

  describe("GET /users", () => {
    it("should return my user object", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: "Taylor",
            age: 31
          })
        })
        .end(done)
    })
  })
})
