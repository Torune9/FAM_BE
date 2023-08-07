const {Admin,User} = require('../../models')
const sendEmail = require('../../Services/mailer')
const ForgotController = async (req,res)=>{
    try{
        const users = await User.findAll()
        const {email} = req.body
        const user = users.find((user)=>user.email == email)
        const urlReset = `${req.protocol}://${req.get('host')}/api/resetPassword`
    if(user){
        await sendEmail({email:email},urlReset)
        res.json({
         from: '"Fred Foo 👻" <Guest@example.com>',
         to: user.email, 
         subject: "Hello",
         message : urlReset
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