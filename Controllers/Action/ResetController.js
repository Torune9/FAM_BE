const {User} = require('../../models')
const bcrypt = require('bcrypt')
const ResetController = async (req,res)=>{
    try{
        const data = await User.findAll()
        const {newPassword} = req.body
        const user = data.find((user)=>req.params.token == user.reset_token)

        if (!newPassword) {
            return res.status(404).json({
                message : `Form can't be empty`
            })
        }

        if(user){
            if(user.exp_reset_token > new Date())
            {
                const hasNewPassword = await bcrypt.hash(newPassword,10)
                user.password = hasNewPassword
                user.reset_token = null
                await user.save()
                return res.json({
                    message : "Reset password has been success",
                })
            }else{
                res.status(408).json({
                    message : "Request Timed Out"
                })
            }
        }else{
            return res.status(400).json({
                message : "Invalid Token"
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