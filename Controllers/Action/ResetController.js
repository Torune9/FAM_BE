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

            if(user.exp_reset_token > new Date()){
                
                const hasNewPassword = await bcrypt.hash(newPassword,10)
                user.password = hasNewPassword
                res.render('closeTab',{
                    tittle :'Ok',
                    message : `Thank you,The password has been changed, you can close this tab`,
                    code : res.statusCode
                })
                user.reset_token = null

                return await user.save()


            }else{
                return res.status(408).json({
                    message : 'Request timed out'
                })
            }
        }else{
           return res.status(400).json({
                message : 'Invalid token'
           })
        }


    }catch(err){
        console.log(err);
        res.json({
            error : err
        })
    }
   
}

const sendLink = async (req,res)=>{
    const {token} = req.params
    const user = await User.findOne({
        where : {
            reset_token : token
        }
    })
    if (user) {
        if (user.exp_reset_token > new Date()) {
            res.render('resetPassword',{
                    token : token
                }
            )
        }else{
            return res.status(408).render('closeTab',{
                tittle : 'Not Ok',
                message : 'Request Timed Out',
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
}


module.exports ={ResetController,sendLink}