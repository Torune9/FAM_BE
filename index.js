
const router = require('./routes/index')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)


app.listen(3000,()=>{
    console.log("Running In Port 3000");
})