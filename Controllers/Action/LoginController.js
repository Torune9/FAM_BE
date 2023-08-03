const {Admin,User} = require('../../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const LoginController = async (req,res)=>{ 
    try{
        const data = await User.findAll()
        const {username,password} = req.body
        const authUser = data.find(data => data.username == username)
        if(authUser){
            const validPw = await bcrypt.compare(password,authUser.password)
            if (validPw){
                const secretJWT = "kqbwfkqfpiqwbwqkjfbwqf"
                const token = jwt.sign({
                    "username" : authUser.username,
                    "email" : authUser.email
                },secretJWT)
                const message = {
                    "statusCode": 0,
                    "message": "OK! Login Berhasil",
                    "data": {
                      "user": {
                        "name": authUser.username
                      },
                      "token": token
                    }
                  }
                  res.json(message)
            } else{
                res.send("Login gagal")
            } 
                }else{
                    res.json({
                        "message" : "Gagal Login"
                    })
                }
    }catch(err){
        console.log(err);
    }
}

module.exports = {LoginController}