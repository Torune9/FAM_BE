const {Admin,User} = require('../../models')

const UpdateUserRole= async (req,res)=>{
    try{
        const {id} = req.params
        const {roleId} = req.body
        const role = [{
            USER:"USER",
            INSPECTOR:"INSPECTOR",
            ADMIN:"ADMIN",
            SYSADMIN:"SYSADMIN",
            AUDIT:"AUDITHOR"
        }]
        const users = await User.findOne({
            where : {
                id : id
            }
        })
        const validate = role.some(data => Object.values(data).includes(roleId))

        if (!users) {
            return res.status(404).json({
                message : "user note found"
            })
        }else{
            if (!validate) {
              return res.status(404).json({
                message : "role note found"
              })  
            }else{
                users.role_id = roleId
                users.updatedAt = new Date()
                users.save()
                return res.json({
                    message : `Role ${users.username} menjadi ${users.role_id}`,
                    status : "Updated",
                    updatedAt : users.updatedAt
                }) 
            }
        }
    }catch(err){
            console.log(err);
    }
}

module.exports = UpdateUserRole