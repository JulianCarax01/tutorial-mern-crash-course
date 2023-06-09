const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const routers = require("./Routes/router")
const {errorHandler} = require("./middleware/errorHandler")
const db = require("./config/db")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/", routers)
app.use(errorHandler)

db()

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})