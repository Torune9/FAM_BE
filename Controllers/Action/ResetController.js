const {Admin,User} = require('../../models')
const bcrypt = require('bcrypt')
const ResetController = async (req,res)=>{
    try{
        const data = await User.findAll()
        const {email,newPassword} = req.body
        const user = data.find((user)=>req.params.token == user.reset_token)
        if(user){
            if(user.exp_reset_token > new Date())
            {
                const updateHash =  await bcrypt.hash(newPassword,10)
                user.password = updateHash
                user.save()
                res.json({
                    message : `Password berhasil di reset`,
                })
            }
        }else{
            res.json({
                code :404,
                message : `Email tidak ditemukan ${email}`
            })
        }

    }catch(err){
        console.log(err);
    }
   
}

module.exports ={ResetController}