const {User, Sequelize} = require('../../models')
const fs = require('fs')
const UploadImageUser = async (req,res)=>{
    try {
        const file = req.file
        const {id} = req.params
        const users = await User.findOne({
            where : {
                id : id
            }
        })
        if (!file) {
            return res.status(404).json({
                message : 'File not found'
            })
        }
        if (users) {
            if (users.img) {
                fs.unlink(`uploads/${users.img}`,(error)=>console.log(error))
            }
            users.img  = file.filename
            await users.save()
            return res.json({
                message: 'Updated',
            });
        }
       return res.status(404).json({
            message : 'Not Found'
        })
    } catch (error) {
        console.log(error);
    }
}


const getImage = async (req,res)=>{
    try {
        const {id} = req.params
        const users = await User.findOne({
            where : {
                [Sequelize.Op.and] :{
                    id : id,
                    img : {
                        [Sequelize.Op.ne] : null
                    }
                }
            },
            attributes : ['img']
        })

        if (!users) {
           return res.status(404).json({
                message : 'Not found'
            })
        }else{
            res.json({
                message : 'Ok',
                data : {
                    user:{
                        image : users
                    }
                },
            })
        }
        
    } catch (error) {
        
    }
}

module.exports ={ UploadImageUser,getImage}