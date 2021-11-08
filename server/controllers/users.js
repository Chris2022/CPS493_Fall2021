const express = require('express');
const model = require("../models/users")
const app = express.Router() //creates a new pipeline

app
// .get("/async", async (req, res, next) =>{
//     console.log("Outer Function:1");
//     model.Async();
//     res.send("Done!");
//     console.log("Outer Function: 2");
// })
.get("/", (req, res, next) =>{
    model.GetAll()
    .then(user=>{
        //no error ends pipeline and sends user
        res.send(user);
    }).catch(next);
})
/* "/:user" is a parameter and it is a path.

*/
.get("/:user_id", (req, res, next) =>{
    model.Get(req.params.user_id)
    .then(user=>{
        //no error ends pipeline and sends user
        res.send(user);
    }).catch(next);
})
.post("/Login", (req, res, next) =>{
    model.Login(req.body.handle, req.body.password)
        .then(user=>{
        //no error ends pipeline and sends user
        res.send(user);
    }).catch(next);// this function will get called only if there is an error
})
.post("/register", (req, res, next) =>{
    const user = req.body;//holding first, name, etc.
    //pass user
    model.Add(req.body)
        .then(user=>{
        //no error ends pipeline and sends user
        res.status(201).send(user);
    }).catch(next);//all errors will go to catch
})
.post("/seed", (req, res, next) =>{
    model.Seed()
        .then(user=>{
            res.status(201).send("Created");
        })
        .catch(next) 
})
module.exports = app;// the export of this file is its own app. 