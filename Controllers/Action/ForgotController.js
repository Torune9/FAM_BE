const {User} = require('../../models')
const sendEmail = require('../../Services/mailer')
const crypto = require('crypto')
const ejs = require('ejs')
const path = require('path')
require('dotenv').config()

const ForgotController = async (req,res)=>{
    try{
        const users = await User.findAll()
        const {email} = req.body
        const user = users.find((user)=>user.email == email)
        const randomBytes = crypto.randomBytes(4);
        const randomNumber = parseInt(randomBytes.toString('hex'), 16);

        if(user){
        const exp = new Date(Date.now() + 900000)
        user.reset_token = randomNumber
        user.exp_reset_token = exp 
        user.save()
        const urlReset = `${req.protocol}://${req.get('host')}/api/reset-password/${user.reset_token}`
        const pathLayout = path.join(__dirname,'../../views/layoutEmail.ejs')
        const layout = await ejs.renderFile(pathLayout,{
            url : urlReset,
            email : user.email
        })
        await sendEmail({
            email : user.email,
            resetPassword : urlReset,
            layout : layout
        })
       
        res.json({
         from: 'example@test.com',
         to: user.email, 
         subject: "Here your link requested for reset password",
         message : urlReset,
        })
    }else{
        res.status(404)
        res.json({
            message : `Email tidak ditemukan ${email}`
        })
    }

    }catch(err){
            console.log(err);
    }
    
}

module.exports = {ForgotController}