const {status_category} = require('../../../models')
const randomize = require('randomatic');

const createStatusCategory = async (req,res)=>{
    try {
        const {name} = req.body
        const data = {
            status  : name.toUpperCase(),
            status_code :randomize('A0',5)
        }
        const existName = await status_category.findOne({
            where : {
                status : name.toUpperCase()
            }
        })

        if (!name) {
            return res.status(406).json({
                message : 'Name must be filled'
            })
        }

        if (existName) {
            return res.status(409).json({
                message : 'Name already exist'
            })
        }else{
            await status_category.create(data)
            res.json({
                status  : 'Ok',
                message : 'status has been added',
            })
        }
    } catch (error) {
        res.json({
            error : error.message
        })
    }
}

module.exports = createStatusCategory