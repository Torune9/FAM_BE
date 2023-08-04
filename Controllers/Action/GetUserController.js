const {Admin,User} = require('../../models')

const GetUserController = async (req,res)=>{
    try{
        const users = await User.findAll(
            {
                attributes : ['username','email','role_id','createdAt']
            }
        )
        res.send(users)

    }catch(err){
        console.log(err);
    }
}

module.exports = {GetUserController}