const express = require('express')//can include express because of the node module 
const app = express() //need to call the express constructor right away
const port = 3000

// app is an object which will have many things attached.
// when someone sends a get message with this particular path,
// then I will send back hello world

app.get('/', (req, res) => {
  res.send('Hello World!')
})

.get("/newpaltz", (req,res) => {
  res.send("Hello Newpaltz")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
