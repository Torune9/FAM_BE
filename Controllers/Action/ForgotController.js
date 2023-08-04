const {Admin,User} = require('../../models')
const ForgotController = async (req,res)=>{
    try{
        const users = await User.findAll()
        const {email} = req.body
        const user = users.find((user)=>user.email == email)
    if(user){
        res.json({
            "message" : `email reset password tlah di kirim ke email ${email}`
        })
    }else{
        res.json({
            "message" : `email tidak ditemukan ${email}`
        })
    }

    }catch(err){
            console.log(err);
    }
    
}

module.exports = {ForgotController}