const {Asset} = require('../../../models')

const UpdateAsset = async(req,res)=>{
    try {
        const {quantity,price,name} = req.body
        const Assets = await Asset.findAll()
        const updateAsset =  Assets.find(md => md.id == req.params.id)

        if (!updateAsset) {
           res.json({
            message : 'Update failed!'
           }) 
        }else{
            updateAsset.name = name
            updateAsset.quantity = quantity
            updateAsset.price = price
            updateAsset.save()
            res.json({
                status : 'Ok!',
                message : 'Updated',
                updateAt : updateAsset.updatedAt
            })
        }

    } catch (error) {
        res.send(error)
    }    
}
module.exports = UpdateAsset