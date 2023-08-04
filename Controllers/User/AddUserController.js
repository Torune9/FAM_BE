const {Admin,User} = require('../../models')
const bcrypt = require('bcrypt')

const AddUserController = async (req,res)=>{
    try{
        const {username,password,email,role_id="user"} = req.body
        const hasPw = await bcrypt.hash(password,10)
    if (username.trim() == "" || password.trim() == "") {
        res.send("Username dan Password tidak boleh")
    }
        const user = {
            username : username,
            password:hasPw,
            email : email,
            role_id : role_id
        } 
        const newUSer = await User.create(user)
        res.json({
            "message" : "Data berhasil dibuat",
            "status" : res.statusCode,
            "createdAt" : newUSer.createdAt,
            "updatedAt" : newUSer.updatedAt
        })
    }catch(err){
            console.log(err);
    }
}

module.exports = {AddUserController}