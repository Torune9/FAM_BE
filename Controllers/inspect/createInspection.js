const {History,Asset} = require('../../models')
const createInspect = async (req,res)=>{
    const {status,information} = req.body
    const {code} = req.params
   try {
    const assets = await Asset.findOne({
        where : {
            asset_code : code
        }
    })
    if (assets) {
       await History.create({
        asset_code  :assets.asset_code,
        status : status,
        information :information
       })

       res.json({
        message : 'inspection has been created',
       })
    }else{
        res.status(404).json({
            message : 'Asset not found'
        })
    }

   } catch (error) {
    res.send(error)
   }
}

module.exports = createInspect