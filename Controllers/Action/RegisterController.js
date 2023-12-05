const {User, Sequelize} = require('../../models')
const bcrypt = require('bcrypt')

const register = async (req,res)=>{
    try{
        const {username,password,email} = req.body
        const hasPw = await bcrypt.hash(password,10)
        const existUser = await User.findOne({
            where : {
               [Sequelize.Op.or]  : [
                {username : username},
                {email : email}
               ]
            }
        })

    if (!username || !password || !email) {
        return res.status(400).json({
            message : `form can't be empty`
        })
    }

    if (existUser) {
       return res.status(400).json({
            message : 'User already exist'
        })
    }

        const user = {
            username : username,
            password:hasPw,
            email : email,
            role_id : "USER",
        } 
        await User.create(user)
        res.json({
            message : "Register success",
            status : res.statusCode,
        })
    }catch(error){
        return res.send(error)
           return res.status(400).json({
                error  :error
            })
    }
}

module.exports = {register}