const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("works home")
})

app.get("/new", (req, res) => {
    res.send("also works now")
})




app.listen(process.env.PORT || 5000)
module.exports = app