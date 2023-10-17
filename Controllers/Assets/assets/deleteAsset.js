const {Asset,History} = require('../../../models')


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

const DeletePermanentAsset = async(req,res)=>{
    try {
        const {id} = req.params
        const asset = await Asset.destroy({
            where : {
                id : id
            },
        })

       if (!asset) {
           res.status(404).json({
               message : `asset not found`
           })
        }else{
           return res.json({
            message : 'Asset has been permanently deleted'
           })
       }
    } catch (error) {
        console.log(error);
        res.send(error.message)
    }
}

module.exports = {DeleteSoftAsset,DeletePermanentAsset}