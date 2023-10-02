const {Asset,MD_Asset} = require('../../../models')
const randomize = require('randomatic');

const AddAsset = async (req,res)=>{
    try {
        const {name,quantity,code,status,created_by} = req.body
        const masterAsset = await MD_Asset.findAll()
        const master = masterAsset.find(master => master.category_code == code)

        if (!name || !quantity || !status || !created_by) {
            return res.json({
                message : `All fields can't be empty`
            })
        }
 
         if (!master) {   
            res.status(404)
            return res.json({
                code : res.statusCode,
                message : `Category Not Found`,
            })    
         }

         await Asset.create({
            name : name,
            quantity : quantity,
            asset_code : randomize('A0',5),
            category_code : code,
            status : status,
            created_by : created_by
         })

         res.json({
                status : 'Ok',
                message: 'Success,asset has been created',
            })
 
     } catch (error) {
        
         res.send(error.message)
     }

}

module.exports = AddAsset
