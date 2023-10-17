const {History,Asset, Sequelize} = require('../../models')
const createInspect = async (req,res)=>{
    const {status,information} = req.body
    const {code} = req.params
   try {
    const assets = await Asset.findOne({
        where : {
            asset_code : code
        }
    })
    // const existingInspection = await History.findOne({
    //     where: {
    //         asset_code : code,
    //         inspection_date : {
    //             [Sequelize.Op.gt] : new Date()
    //         }
         
    //     }
    //   });

     if (!status || !information) {
        return res.status(406).json({
            message : 'Field cant be empty'
        })
     }
      
    if (assets) {
        const date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
        // if (existingInspection) {
        //     return res.status(400).json(
        //         { message: 'The inspection has been carried out, please wait one week' }
        //         );
        // }else{
        // }
        await History.create({
         asset_code  :assets.asset_code,
         status : status,
         information :information,
         inspection_date: date,
         name : assets.name
        })
    
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