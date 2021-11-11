const express = require('express');
const model = require("../models/posts")
const app = express.Router() //creates a new pipeline

app
.get("/", (req, res, next) =>{
    res.send(model.GetAll());
})
.get("/wall/:handle", (req, res, next) =>{
    model   .GetWall(req.params.handle)
            .then( x=> res.send(x) )
            .catch(next)    
})
.get("/feed/:handle", (req, res, next) =>{
    model   .GetFeed(req.params.handle)
            .then( x=> res.send(x) )
            .catch(next)    
})
.get("/search", (req, res, next) =>{
    res.send(model.Search(req.query.q));
})
/*
id is the parameter so we do params.id
*/
.get("/:id", (req, res, next) =>{
    console.log(req.headers)
    res.send(model.Get(req.params.id));
})
.post("/", (req, res, next) =>{
    const newPost =model.Add(req.body)//body is gonna be a parsed version of the json we send
    res.status(201).send(newPost);
})
.patch("/:id", (req, res, next) =>{
    model   .Update(req.params.id, req.body)
            .then( x=> res.send(x) )
            .catch(next) 
})
.delete("/:id", (req, res, next) =>{
    model   .Delete(req.params.id)
            .then( x=> res.send({ deleted: x }) )
            .catch(next) 
})
.post("/seed", (req, res, next) =>{
    model   .Seed()
            .then( x=> res.status(201).send("Created") )
            .catch(next)
})

module.exports = app;// the export of this file is its own app. 