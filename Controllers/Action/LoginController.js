const {Admin,User} = require('../../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const LoginController = async (req,res)=>{ 
    try{
        const users = await User.findAll()
        const {username,password} = req.body
        const authUser = users.find(user => user.username == username)
        if(authUser){
            const validPw = await bcrypt.compare(password,authUser.password)
            if (validPw){
                const secretJWT = "kqbwfkqfpiqwbwqkjfbwqf"
                const token = jwt.sign({
                    "username" : authUser.username,
                    "email" : authUser.email
                },secretJWT)
                const message = {
                    "statusCode": 200,
                    "message": "OK! Login Berhasil",
                    "data": {
                      "user": {
                        "name": authUser.username,
                        "role" : authUser.role_id
                      },
                      "token": token
                    }
                  }
                  res.json(message)
            } else{
                res.json({
                    "message" : "Gagal Login Password Salah"
                })
            } 
                }else{
                    res.json({
                        "message" : "Login Gagal!"
                    })
                }
    }catch(err){
        console.log(err);
    }
}

module.exports = {LoginController}