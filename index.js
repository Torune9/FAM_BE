const router = require('./routes/index')
const routerAsset = require('./routes/asset')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.set('view engine','ejs')
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(router)
app.use(routerAsset)

app.listen(3000,()=>{
    console.log("Running In Port 3000");
})