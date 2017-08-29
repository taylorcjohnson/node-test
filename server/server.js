const express = require("express")

let app = express()

// app.get('/', (req, res) => {
//     res.status(200).send('Hello world!')
// })

app.get("/", (req, res) => {
  res.status(404).send({
    error: "Page not found.",
    name: "Todo App v1.0"
  })
})

app.get("/users", (req, res) => {
  res.status(200).send([
    {
      name: "Taylor",
      age: 31
    },
    {
      name: "Andrew",
      age: 25
    },
    {
      name: "Bob",
      age: 92
    }
  ])
})

app.listen(3000)

module.exports.app = app
