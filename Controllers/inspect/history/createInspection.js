const {History,Asset, Sequelize} = require('../../../models')
const createInspect = async (req,res)=>{
    const {inspector,status,information,idAttachment} = req.body
    const {id} = req.params
    const file = req.files
    console.log(req.body);
    console.log('id : ',id);
    try {
        const assets = await Asset.findOne({
            where : {
                id : id
            }
        })
        const existingInspection = await History.findOne({
            where: {
                id : id,
                inspection_date : {
                [Sequelize.Op.gt] : new Date()
            }
            
        }
    });
      
    if (assets) {
        const date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
        if (existingInspection) {
            return res.status(408).json(
                { message: 'The inspection has been carried out, please wait one week' }
                );
        }else{
            await History.create({
                asset_code  :assets.asset_code,
                name : assets.name,
                status : status,
                inspection_date: date,
                assetId : id,
                attachmentId : idAttachment,
                information : information
            })
        }
    
        return res.json({
          message : 'inspection has been created',
         })
        
    }else{
        res.status(404).json({
            message : 'Asset not found'
        })
    }

   } catch (error) {
    console.log(error);
    res.json({
        message : error
    })
   }
}

module.exports = createInspect