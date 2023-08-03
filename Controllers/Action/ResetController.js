const {Admin,User} = require('../../models')
const ResetController = async (req,res)=>{
    try{
        const data = await User.findAll()
        const {email,newPassword} = req.body
        const user = data.find((user)=>user.email == email)
        if(user){
            user.password = newPassword
            res.json({
                "message" : `Password berhasil di reset`,
        
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

module.exports ={ResetController}