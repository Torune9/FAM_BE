const {status_category} = require('../../../models')
const getStatusCategory = async (req,res)=>{
    try {
        const status = await status_category.findAll({
            attributes : ['status','status_code','createdAt']
        })
        res.json({
            message : 'Ok',
            result : {
                data :status
            }
        })
    } catch (error) {
        console.log(error);
        res.json({
            error : error
        })
    }
}

module.exports = getStatusCategory