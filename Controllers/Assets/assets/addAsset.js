const {Asset,MD_Asset} = require('../../../models')

const AddAsset = async (req,res)=>{
    try {
        const {name,quantity,category_code} = req.body
        const masterAsset = await MD_Asset.findAll()
        const master = masterAsset.find(master => master.category_code == category_code)

        if (!category_code || !name || !quantity) {
            return res.json({
                message : `All fields can't be empty`
            })
        }
 
         if (!master) {   
            res.status(404)
            return res.json({
                code : res.statusCode,
                message : `Category Not Found!`,
            })    
         }

         await Asset.create({
            name : name,
            quantity : quantity,
            asset_code : category_code
         })
         res.json({
                status : 'OK!',
                message: 'Success!, asset has been created',
            })
 
     } catch (error) {
        
         res.send(error)
     }

}

module.exports = AddAsset
