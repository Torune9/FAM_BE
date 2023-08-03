const {Admin,User} = require('../../models')

const AddUserController = async (req,res)=>{
    try{
        const {username,password,email} = req.body
    if (username.trim() == "" || password.trim() == "") {
        res.send("Username dan Password tidak boleh")
    }
        const newUSer = await User.create({username:username,password:password,email:email})
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