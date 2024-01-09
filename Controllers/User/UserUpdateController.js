const {User, Sequelize} = require('../../models')
const fs = require('fs')
const manageUser = async (req,res)=>{
    try {
        const file = req.file
        const {id} = req.params
        const {username,email} = req.body
        const users = await User.findOne({
            where : {
                id : id
            }
        })
       
        if (users) {
            
            const existFile = fs.existsSync(`uploads/${users.img}`) 

            if (users.img && existFile) {
                fs.unlink(`uploads/${users.img}`,(error)=>console.log(error))
            }
            if (file) {
                users.img  = file.filename
            }
            
            users.username = !username ? users.username : username
            users.email = !email ? users.email : email
            await users.save()
            return res.json({
                message: 'Updated',
            });
        }
       return res.status(404).json({
            message : 'Not Found'
        })
    } catch (error) {
        const err = error.errors
        if (err) {
            err.forEach(e => {
               return res.status(409).json({
                    message : 'Email already exist',
                })
            });
        }else{
            return res.status(400).json({
                message : 'Bad request',
                status : res.statusCode
            })
        }
       
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

module.exports ={ manageUser,getImage}