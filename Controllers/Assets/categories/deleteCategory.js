const {Asset_Category} = require('../../../models')
const DeleteSoftCategory = async (req,res) =>{
    try {
        const {id} = req.params
        const del = await Asset_Category.findOne({where : {id : id}})
        
        if (!del) {
            res.status(404)
            res.json({
                message : `Failed to delete,Code: ${code} not found!`,
                code : res.statusCode,
            })
        }else{
           await Asset_Category.update(
            {is_deleted : true},
            {where : 
                {id : id}
            },
            )
        res.json({
            status : 'Ok!',
            message : `Soft Deleted`
           })
       }
        
    } catch (error) {
        res.json({
            error : error.errors
        })
    }

}

module.exports = DeleteSoftCategory