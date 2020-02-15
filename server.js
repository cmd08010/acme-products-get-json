const express = require("express")
const app = express()
const path = require("path")
const port = 8080
const db = require("./public/db")

app.use(express.static("public"))

//want to use the db.js file to read the products in products.json

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
})
console.log(__dirname)

app.get("/api/products", async (req, res, next) => {
  res.send(await db.readJSON(path.join(__dirname, "public/products.json")))
})

app.listen(port, () => {})
