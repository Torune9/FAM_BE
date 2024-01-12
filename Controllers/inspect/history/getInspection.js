const {History,Sequelize} = require('../../../models')

const getInspection = async (req,res)=>{
    try {
        const {search=''} = req.query
        const history = await History.findAll({
            where : {
               name : { 
                    [Sequelize.Op.like]  : `%${search}%`
                },
            },
        })
        res.json({
            message : 'Ok',
            result : {
                data : history
            }
        })
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

module.exports = getInspection