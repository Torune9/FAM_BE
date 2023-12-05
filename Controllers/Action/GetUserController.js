const {User,Sequelize} = require('../../models')

const GetUserController = async (req,res)=>{
    try{
        const { 
            search = '',
            isActive = true  } = req.query;
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

module.exports = {GetUserController}