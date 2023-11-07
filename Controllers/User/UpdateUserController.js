const {Admin,User} = require('../../models')

const updateUserController = async (req,res)=>{
    try{
        const role = [{
            ADMIN:"ADMIN",
            SYSADMIN:"SYSADMIN",
            AUDIT:"AUDITHOR"
        }]
        const users = await User.findAll()

        const {email,roleId} = req.body
        const update = users.find((data)=> data.email == email)
        const validate = role.some(data => Object.values(data).includes(roleId))

        if(!update){
            return res.status(404).json({
                message : `${email} not found`,
            })
        }
        if (validate) {
            update.role_id = roleId
            update.updatedAt = new Date()
            update.save()
            return res.json({
                message : `Role ${update.username} menjadi ${update.role_id}`,
                status : "Updated",
                updatedAt : update.updatedAt
            }) 
        }else{
            return res.status(404).json({
                message : "Role note found"
            })
        }
    }catch(err){
            console.log(err);
    }
}

module.exports = {updateUserController}