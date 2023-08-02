const {Admin,User} = require('../models')

const updateUserController = async (req,res)=>{
    try{
        const users = await User.findAll()
        const {email,roleId} = req.body
        const update = users.find((data)=> data.email == email)

        if(!update){
            res.json({
                "message" : `${email} tidak di temukan`,
            })
        }else{
            update.role_id = roleId
            update.updatedAt = new Date()
            update.save()
            res.json({
                "message" : `Role ${update.username} menjadi ${update.role_id}`,
                "status" : "Updated",
                "updatedAt" : update.updatedAt
            })
        }
    }catch(err){
            console.log(err);
    }
}

module.exports = {updateUserController}