const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("workshomje??")
})

app.get("/new", (req, res) => {
    res.send("also works now lol")
})




app.listen(process.env.PORT || 5000)
module.exports = app