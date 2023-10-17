const {Attachment,History} = require('../../../models')

const getAttachmentInspect = async (req,res)=>{
    try {
        const {code} = req.params
        const attachments = await Attachment.findAll({
            where : {
                assetId : code
            },
            include : [{model : History,as:'history'}]
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