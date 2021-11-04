const express = require('express');
const model = require("../models/users")
const app = express.Router() //creates a new pipeline

app
.get("/", (req, res, next) =>{
    res.send(model.GetAll());
})
/* "/:user" is a parameter and it is a path.

*/
.get("/:user_id", (req, res, next) =>{
    res.send(model.Get(req.param.user_id));
})
.post("/Login", (req, res, next) =>{
    model.Login(req.body.handle, req.body.password, (err,user)=>{
        if(err){
            next(err);return;//calling next parameter err is better on a global level
            //always return when saying next
        }
        //no error ends pipeline and sends user
        res.send(user);
    });
})
.post("/register", (req, res, next) =>{
    const user = req.body;//holding first, name, etc.
    //pass user
    model.Add(user,(err,user)=>{
        if(err){
            next(err)//calling next parameter err is better on a global level
        }
        //no error ends pipeline and sends user
        res.send(user);
    });
})
module.exports = app;// the export of this file is its own app. 