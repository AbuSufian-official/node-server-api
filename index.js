const express = require('express');
const app = express()
const port = 5000
const user=[{name:"siam",age:44102}
,{name:"gfdhgfhgfhsiam",age:14502},
{name:"sffffeiam",age:1.02},]


app.get('/', (req, res) => {
  res.send('Hello Worlduuuu!')
})

app.get("/about",(req,res)=>{
    res.send(`this is about,${user.length}`)
})

app.get("/deta",(req,res)=>{
    res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})