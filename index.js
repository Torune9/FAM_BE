require('dotenv').config()

const express = require('express')
const cors = require('cors')
const staticFile = express.static('uploads')

const routes = require('./Services/routing/router')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine','ejs')

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/resources',staticFile);
app.use((req, res, next) => {
    res.status(404).render('notFound');
});

app.use(cors())
app.use(routes)

app.listen(3000,()=>{
    console.log("Running In Port 3000");
})