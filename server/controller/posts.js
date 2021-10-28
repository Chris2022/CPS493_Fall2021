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
/*
id is the parameter so we do params.id
*/
.get("/:id", (req, res, next) =>{
    console.log(req.headers)
    res.send(model.Get(req.param.id));
})
.post("/", (req, res, next) =>{
    const newPost =model.Add(req.body)//body is gonna be a parsed version of the json we send
    res.status(201).send(newPost);
})

module.exports = app;// the export of this file is its own app. 