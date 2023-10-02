const {History,Asset} = require('../../models')

const getInspection = async (req,res)=>{
    try {
        const {code} = req.params
        const history = await History.findAll({
            attributes :['asset_code','status','information'],
            order: [['id', 'DESC']],
        })
        if (code) {
            const history = await History.findOne({
                where : {
                    asset_code : code
                },
                include : [{
                    model:Asset,
                    as:'asset',
                    attributes: ['name','status','quantity']
                }],
                order: [['id', 'DESC']],
                attributes :['asset_code','status','information']
            })
           return res.json({
                message : 'Ok',
                result : {
                    data : history
                }
            })
        }
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