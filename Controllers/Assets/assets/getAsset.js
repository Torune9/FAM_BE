const {Asset,History,Sequelize} = require('../../../models')
const GetAsset = async (req,res)=>{
    try {
        const { 
            status = false,
            search = '' } = req.query;
        const assets = await Asset.findAll({
            attributes : ['id','name','quantity','asset_code','status','created_by','category_code','is_deleted'],
            order : [['id','DESC']],
            where : {
                is_deleted : status,
                name: {
                    [Sequelize.Op.like]: `%${search}%`
                }
            },
            include : [{
                model  : History,
                attributes:['name','status','information','inspection_date']
            }]
        })

        res.json({
            message : 'Ok',
            result :{
                data : assets
            }
        })
    } catch (error) {
        console.log(error);
        res.json({
            error : error
        })
    }
}

module.exports = GetAsset