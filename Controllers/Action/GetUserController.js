const {User,Sequelize} = require('../../models')

const GetUserController = async (req,res)=>{
    const { search = '',isActive = true } = req.query;

    try{
        const users = await User.findAll({
            where : {
                username: {
                    [Sequelize.Op.like]: `%${search}%`
                },
                active : isActive,
                role_id : {
                    [Sequelize.Op.ne] : 'SYSADMIN'
                }
            },
        })
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

const GetUsernameById = async (req,res)=>{
    const {id} = req.params
    try {
        const username = await User.findOne({
            where : {
                id : id
            },
            attributes : ['username']
        })
        if(username){
            res.json({
                data :{
                    user : username
                }
            })
        }else{
            res.status(404).json({
                message : 'User not found'
            })
        }
    } catch (error) {
        
        res.status(400).json({
            message : error
        })
    }
}


module.exports = {GetUserController,GetUsernameById}