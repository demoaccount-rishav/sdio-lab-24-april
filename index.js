const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('!! Welcome To SDIO Lab Exam 2024 !!')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
