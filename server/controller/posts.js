const express = require('express');
const model = require("../model/posts")
const app = express.Router() //creates a new pipeline

app
.get("/", (req, res, next) =>{
    res.send(model.GetAll());
})
.get("/search", (req, res, next) =>{
    res.send(model.Search(req.query.q));
})
.get("/:id", (req, res, next) =>{
    res.send(model.Get(req.param.id));
})

module.exports = app;// the export of this file is its own app. 