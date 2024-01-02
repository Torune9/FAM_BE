const {Attachment,History} = require('../../../models')

const getAttachmentInspect = async (req,res)=>{
    try {
        const {code} = req.params
        const attachments = await Attachment.findAll({
            where : {
                asset_code :code
            }
        })
        res.json({
            data : attachments
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

module.exports = getAttachmentInspect