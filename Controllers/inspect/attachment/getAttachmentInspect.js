const {Attachment,History} = require('../../../models')

const getAttachmentInspect = async (req,res)=>{
    try {
        const {id} = req.params
        const attachments = await Attachment.findAll({
            where : {
                id :id
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