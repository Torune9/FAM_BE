const {Asset} = require('../../../models')

const DeleteSoftAsset = async (req,res) => {
    try {
        const {id} = req.params
        const asset = await Asset.findOne({
            where : {
                id : id
            }
        })

       if (!asset) {
           res.json({
               message : `${id} not found`
           })
        }else{
            asset.is_deleted = true
            await asset.save()
           res.json({
            message : 'Soft Deleted'
           })
       }
    } catch (error) {
        res.send(error.message)
    }

}

module.exports = DeleteSoftAsset