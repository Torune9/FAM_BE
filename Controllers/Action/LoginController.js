const {User, Sequelize} = require('../../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const LoginController = async (req,res)=>{ 
    try{
        const {username,password} = req.body
        const users = await User.findOne({
            where : {
                username : username,
                active : true
            }
        })
        if(users){
            const validPw = await bcrypt.compare(password,users.password)
                if (validPw){
                    const secretJWT = process.env.JWT_SECRET_KEY
                    const token = jwt.sign({
                        username : users.username,
                        email : users.email,
                        role : users.role_id
                    },secretJWT)
                    const message = {
                        statusCode: res.statusCode,
                        message: "Login success",
                        data: {
                        user: {
                            name: users.username,
                            role : users.role_id
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