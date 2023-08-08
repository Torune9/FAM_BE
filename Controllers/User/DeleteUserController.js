const {Admin,User} = require('../../models')

const DeleteController = async (req,res)=>{
    try{
        const users = await User.findAll()
        const {username,roleId} = req.body
        const deleteUser = users.find(user=> user.username == username && user.role_id == roleId)

        if(!deleteUser) {
            res.json({
                message : `User dengan username : ${username} atau role ${username} : ${roleId} tidak ditemukan`
            })
        }

        deleteUser.destroy()
        res.json({
            message : "Data berhasil di hapus",
            deletedAt : new Date()
        })
    }catch(err){
            console.log(err);
    }
}

module.exports = {DeleteController}