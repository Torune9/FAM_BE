const express = require('express')
const app = express()

app.post('/api/authentication/login',(req,res)=>{ 

    const datas = [{
        username : req.query.username,
        password : req.query.password,
        email : req.query.email
    }]
    const [user] = datas

    const authUser = datas.find(data => data.username == user.username && data.password == user.password)
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

app.listen(3000,()=>{
    console.log("Running In Port 3000");
})