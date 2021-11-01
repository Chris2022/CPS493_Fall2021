const express = require('express');
const model = require("../models/users")
const app = express.Router() //creates a new pipeline

app
.get("/", (req, res, next) =>{
    res.send(model.GetAll());
})
/* "/:user" is a parameter and it is a path.

*/
.get("/:user", (req, res, next) =>{
    res.send(model.Get(req.param.user_id));
})

module.exports = app;// the export of this file is its own app. 