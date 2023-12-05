const {User} = require('../../../models')
const bcrypt = require('bcrypt')
const resetPassword =  async (req,res)=>{
    try{
        const {id} = req.params
        const {newPassword} = req.body
        const user = await User.findOne({
            where :{
                id : id
            }
        })

        if (!newPassword) {
            return res.status(404).json({
                message : `Form can't be empty`
            })
        }

        if(user){
            const hasNewPassword = await bcrypt.hash(newPassword,10)
            user.password = hasNewPassword
            user.reset_token = null
            await user.save()
            return res.json({
                message : "Reset password has been success",
            })
        }else{
            return res.status(400).json({
                message : "User not found"
            })
        }
    }catch(err){
        console.log(err);
        res.json({
            error : err
        })
    }
   
}

module.exports = resetPassword