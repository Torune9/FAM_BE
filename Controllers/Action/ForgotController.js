const {User} = require('../../models')
const sendEmail = require('../../Services/utils/mailer')
const crypto = require('crypto')
const ejs = require('ejs')
const path = require('path')

const ForgotController = async (req,res)=>{
    const users = await User.findAll()
    const {email} = req.body
    const user = users.find((user)=>user.email == email)
    const randomBytes = crypto.randomBytes(4)
    const token = parseInt(randomBytes.toString('hex'), 16)
    const pathLayout = path.join(__dirname,'../../views/layoutEmail.ejs')
    const expToken = new Date(Date.now() + 900000)
    try{

        if(user){
        user.reset_token = token
        user.exp_reset_token = expToken 
        user.save()
        const urlReset = `${req.protocol}://${req.get('host')}/user/password/${user.reset_token}`
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
            message : `Email not found`
        })
    }

    }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'Internal server error'
            })
    }
    
}

module.exports = {ForgotController}