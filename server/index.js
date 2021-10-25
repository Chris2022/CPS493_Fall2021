const express = require('express')//can include express because of the node module
const path = require('path');require('dotenv').config();

const userController =require("./controller/users")
const postscontroller = require('./controller/posts');

const app = express() //need to call the express constructor right away
const port = process.env.PORT||3000 //the port that will be receiving our message.


console.log(`The best class at New Paltz is ${process.env.BEST_CLASS}`);


// app is an object which will have many things attached.
// when someone sends a get message with this particular path,
// then I will send back hello world

app
  .use("/", express.static(path.join(__dirname,'../docs')))//returns a sub pipeline
  .use('/users', userController)
  .use('/posts', postscontroller)

app 
  .get('*',(req,res) =>res.sendFile(path.join(__dirname,'../docs/index.html')))//you can include an actual file. Can send a file
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
