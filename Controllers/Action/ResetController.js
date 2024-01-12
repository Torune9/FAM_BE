const {User} = require('../../models')
const bcrypt = require('bcrypt')
const ResetController = async (req,res)=>{
    const {token} = req.params
    const {newPassword} = req.body
    try{
        const user = await User.findOne({
            where : {
                reset_token : token
            }
        })

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
                    return res.render('closeTab',{
                    tittle : 'Thank you',
                    message : `Thank you,The password has been changed, you can close this tab`,
                    code : res.statusCode
                })
            }else{
                return res.status(408).render('closeTab',{
                    tittle : 'Not Ok',
                    message : 'Request Time Out',
                    code : res.statusCode
                })
            }
        }else{
            return res.status(406).render('closeTab',{
                    tittle : 'Not Ok',
                    message : 'Invalid Token',
                    code: res.statusCode
                })
        }


    }catch(err){
        console.log(err);
        res.json({
            error : err
        })
    }
   
}

const sendLink = (req,res)=>{
    res.render('resetPassword',{
            token : req.params.token
        }
    )
}


module.exports ={ResetController,sendLink}