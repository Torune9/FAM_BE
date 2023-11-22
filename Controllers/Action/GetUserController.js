const {User} = require('../../models')

const GetUserController = async (req,res)=>{
    try{
        const users = await User.findAll()
        res.json({
            code:res.statusCode,
            data : users
        })

    }catch(err){
       res.json({
        code : res.statusCode,
        message : "NOT_FOUND",
        error : err
       })
    }
}

module.exports = {GetUserController}