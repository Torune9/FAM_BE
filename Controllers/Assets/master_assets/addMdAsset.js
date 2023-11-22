const {Asset_Category,MD_Asset} = require('../../../models')
const rule = /[!@#$%^&*()+"":;'{}|\\//.?<>,]/
const AddMdAsset = async (req,res)=>{
    try {
       const {name,code,price} = req.body
       const categories = await Asset_Category.findAll({
        attributes : ['category_code','category_name']
       })
       const asset = {
        name: name.replace(/^\w/, (c) => c.toUpperCase()),
        price :price,
        category_code : code.toUpperCase(),
        status : 'Aktif',
        is_deleted : false
       }
       const category = categories.find(category => category.category_code == code.toUpperCase())

    if(!name || !code || !price){
        res.status(406).json({
            message : `Forms can't be empty`,
        })
    }else if (rule.test(name) || rule.test(code) || rule.test(price)) {
        res.status(406).json({
            message : 'Enter valid data',
        })
    }
    else{
        if (category) {     
            await MD_Asset.create(asset)
            res.json({
                status : 'Ok',
                message: 'Success,asset has been created',
            })
        }else{
            res.status(404).json({
                message : `Category Not Found`,
            })
        }
        }

    } catch (error) {
        for (const err of error.errors){
            res.status(409).json({
                error: err.message,
                type: err.type,
                key : err.validatorKey
            })
        }
    }

}

module.exports = AddMdAsset