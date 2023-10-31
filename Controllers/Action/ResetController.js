const {User} = require('../../models')
const bcrypt = require('bcrypt')
const ResetController = async (req,res)=>{
    try{
        const data = await User.findAll()
        const {newPassword} = req.body
        const user = data.find((user)=>req.params.token == user.reset_token)
        if(user){
            if(user.exp_reset_token > new Date())
            {
                const hasNewPassword = await bcrypt.hash(newPassword,10)
                user.password = hasNewPassword
                user.reset_token = null
                res.json({
                    message : "Password berhasil di reset",
                })
            }else{
                res.status(408)
                res.json({
                    message : "Request Timed Out"
                })
            }
            await user.save()
        }else{
            res.status(400).json({
                message : "Token Tidak Valid"
            })
        }

    }catch(err){
        console.log(err);
        res.json({
            error : err
        })
    }
   
}

module.exports ={ResetController}