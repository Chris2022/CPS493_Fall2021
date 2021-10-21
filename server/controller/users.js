const express = require('express');
const model = require("../model/users")
const app = express.Router() //creates a new pipeline

app
.get("/", (req, res, next) =>{
    res.send(model.GetAll());
})

module.exports = app;// the export of this file is its own app. 