const express = require("express");
const dbConnect = require("./db.js")
const app = express()
const bodyparse = require("body-parser")
const Empcontrollers = require("./Controllers/controller.js")
app.use(bodyparse.json())
app.use("/api/employee",Empcontrollers)
dbConnect()
.then(() => {
        console.log("Database is connected")
        app.listen(8080, () => {
            console.log("server is running on 3000")
        })
    })
    .catch((err) => {
        console.log(err)
    })

