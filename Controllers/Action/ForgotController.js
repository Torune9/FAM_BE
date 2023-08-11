const {Admin,User} = require('../../models')
const sendEmail = require('../../Services/mailer')
require('dotenv').config()
const crypto = require('crypto')


const ForgotController = async (req,res)=>{
    try{
        const users = await User.findAll()
        const {email} = req.body
        const user = users.find((user)=>user.email == email)
        const randomBytes = crypto.randomBytes(4);
        const randomNumber = parseInt(randomBytes.toString('hex'), 16);

        if(user){
        const exp = new Date(Date.now() + 3600000)
        user.reset_token = randomNumber
        user.exp_reset_token = exp 
        user.save()
        const urlReset = `${req.protocol}://${req.get('host')}/api/reset-password/${user.reset_token}`
        await sendEmail({email:email},urlReset)
       
        res.json({
         from: 'example@test.com',
         to: user.email, 
         subject: "Here your link requested for reset password",
         message : urlReset,
        })
    }else{
        res.json({
            code : 404,
            message : `Email tidak ditemukan ${email}`
        })
    }

    }catch(err){
            console.log(err);
    }
    
}

module.exports = {ForgotController}