const {Asset} = require('../../../models')
const RestoreAsset = async (req,res)=>{
    try {
        const {id} = req.params
        const data = await Asset.findOne({where : {id : id}})
        
        if (data) {
            await Asset.update(
                {is_deleted : false},
                {where : 
                    {id : id}
                },
                )
            res.json({
                status : 'Ok',
                message : `Has been restore`
               })
        }else{
            res.status(404)
            res.json({
                message : `Failed to restore,Code: ${id} not found!`,
                code : res.statusCode,
            })
          
       }
        
    } catch (error) {
        res.json({
            eror : error
        })
    }
}

module.exports = RestoreAsset