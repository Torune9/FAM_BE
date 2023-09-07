const {User} = require('../../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const LoginController = async (req,res)=>{ 
    try{
        const users = await User.findAll()
        const {username,password} = req.body
        const authUser = users.find(user => user.username == username)
        if(authUser){
            const validPw = await bcrypt.compare(password,authUser.password)
                if (validPw){
                    const secretJWT = process.env.JWT_SECRET_KEY
                    const token = jwt.sign({
                        username : authUser.username,
                        email : authUser.email,
                        role : authUser.role_id
                    },secretJWT)
                    const message = {
                        statusCode: res.statusCode,
                        message: "OK! Login Berhasil",
                        data: {
                        user: {
                            name: authUser.username,
                            role : authUser.role_id
                        },
                        token: token
                        }
                    }
                    res.json(message)
                }else{
                    res.json({
                            code : 406,
                            message : "Wrong password!"
                        })
                    } 
            }else{
                res.json({
                    code : 406,
                    message : "Login failed!"
                })
            }
    }catch(err){
        console.log(err);
    }
}

module.exports = {LoginController}