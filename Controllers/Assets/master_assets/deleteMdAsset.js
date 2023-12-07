const {MD_Asset} = require('../../../models')


const DeleteSoftMdAsset = async (req,res) => {
    try {
        const {id} = req.params
        const mdAsset = await MD_Asset.findOne({
            where : {
                id : id
            }
        })

       if (!mdAsset) {
           res.status(400).json({
               message : `${id} not found`
           })
        }else{
            mdAsset.is_deleted = true
            await mdAsset.save()
           res.json({
            message : 'Soft Deleted'
           })
       }
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = DeleteSoftMdAsset