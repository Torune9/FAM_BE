const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

const users = [{
    username : "bts",
    password : 123,
    email : "bts@gmail.com",
}]


app.post('/api/login',(req,res)=>{
        users.push(req.body)
        res.send(users)
})

app.get('/api/user',(req,res)=>{
    res.send(users)
})

app.post('/api/authentication/login',(req,res)=>{ 

    const {username,password} = req.body
    const authUser = users.find(data => data.username == username && data.password == password)
        if(authUser){
            res.json({
                "message" : "Login berhasil"
            })
        }else{
            res.json({
                "message" : "Gagal Login"
            })
        }
})

app.post('/api/forgot',(req,res)=>{
    const {email} = req.body
    const user =users.find((user)=>user.email == email)
    if(user){
        res.json({
            "message" : `email reset password tlah di kirim ke email ${email}`
        })
    }else{
        res.json({
            "message" : `email tidak ditemukan ${email}`
        })
    }
})

app.post('/api/reset',(req,res)=>{
    const {email,newPassword} = req.body
    const user = users.find((user)=>user.email == email)
    if(user){
        user.password = newPassword
        res.json({
            "message" : `Password berhasil di reset`,
    
        })
    }else{
        res.json({
            "message" : `email tidak ditemukan ${email}`
        })
    }
})

app.listen(3000,()=>{
    console.log("Running In Port 3000");
})