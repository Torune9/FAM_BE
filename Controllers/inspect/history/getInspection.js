const {History, Asset,Attachment,Sequelize} = require('../../../models')

const getInspection = async (req,res)=>{
    try {
        const {search=''} = req.query
        const history = await History.findAll({
            where : {
               name : { 
                    [Sequelize.Op.like]  : `%${search}%`
                },
            },
            include : [{
                model : Attachment,
                attributes  :['asset_code','id','inspector','findings','file'],
                as : 'attachments'
            }]
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