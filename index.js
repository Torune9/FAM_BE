const router = require('./routes/index')
const routerAsset = require('./routes/asset')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const os  = require('os')
const routes = [
    router,
    routerAsset
]

app.set('view engine','ejs')
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/uploads', express.static('uploads'));

app.use(routes)

app.listen(3000,()=>{
    console.log("Running In Port 3000");
})