const {User} = require('../../models')
const bcrypt = require('bcrypt')

const AddUserController = async (req,res)=>{
    try{
        const {username,password,email} = req.body
        const hasPw = await bcrypt.hash(password,10)
        const  existEmail = await User.findOne({
            where : {
                email :  email
            }
        })

    if (username.trim() == "" || password.trim() == "" || email.trim() == "") {
        return res.status(400).json({
            message : `username and password can't be empty`
        })
    }

    if (existEmail) {
       return res.status(400).json({
            message : 'Email already exist'
        })
    }

        const user = {
            username : username,
            password:hasPw,
            email : email,
            role_id : "ADMIN",
        } 
        await User.create(user)
        res.json({
            message : "Register success",
            status : res.statusCode,
        })
    }catch(error){
           return res.status(400).json({
                error  :error
            })
    }
}

module.exports = {AddUserController}