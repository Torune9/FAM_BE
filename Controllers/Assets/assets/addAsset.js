const {Asset,MD_Asset,Asset_Category} = require('../../../models')
const randomize = require('randomatic');

const AddAsset = async (req,res)=>{
    try {
        const {name,quantity,code,created_by} = req.body
        const categories = await Asset_Category.findOne({
            where :{
                category_code : code
            },
          
        })
       
       
        if (!name || !quantity || !created_by || !code) {
            return res.status(406).json({
                message : `All fields can't be empty`
            })
        }
 
         if (!categories) {   
            res.status(404)
            return res.json({
                code : res.statusCode,
                message : `Category Not Found`,
            })    
         }else{

             await Asset.create({
                name : name,
                quantity : quantity,
                asset_code : randomize('A0',5),
                category_code : categories.category_code,
                status : 'aktif',
                created_by : created_by
             })
    
             res.json({
                    status : 'Ok',
                    message: 'Success,asset has been created',
               })
         }

 
     } catch (error) {
        
         res.send(error.message)
     }

}

module.exports = AddAsset
