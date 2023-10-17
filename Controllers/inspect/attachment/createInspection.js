const {Attachment,Asset} = require('../../../models')

const createAttachment = async (req,res)=>{
    try {
        const {inspector,findings} = req.body
        const files = req.file
        const {code} = req.params
        const asset = await Asset.findOne({
            where : {
                asset_code : code
            }
        })
        
        if (!asset || !files) {
            return res.status(404)
            .json({
                message : 'Inspection failed to added'
            })
        }
        
        if (!findings || !inspector) {
            return res.status(406)
            .json({
                message : `field can't be empty`
            })
        }
        
        const data = {
            asset_code : code,
            inspector : inspector,
            findings : findings,
            file : files.originalname
        }

            await Attachment.create(data)
            res.json({
                message : 'Inspection has been created',
                file : files

            })
        
        
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

module.exports = createAttachment