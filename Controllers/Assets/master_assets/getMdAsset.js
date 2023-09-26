const {MD_Asset, Sequelize} = require('../../../models')

const getMdAssetList = async (req,res)=>{
    try{
        const { status = false,
                search = ''} = req.query
        const masterAsset = await MD_Asset.findAll({
            attributes : ['id','name','category_code','is_deleted','status','createdAt'],
            order: [['id', 'DESC']],
            where: {
                is_deleted : status,
                name: {
                 [Sequelize.Op.like]: `%${search}%`
             }
            }
        })
        return res.json({
            code: 200,
            message: 'success',
            result: {
                content : masterAsset,
            } 
        })
    }catch(error){
        res.json({
            error : error.message
        })
    }
}

module.exports = getMdAssetList