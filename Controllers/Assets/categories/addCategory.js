const {Asset_Category} = require('../../../models')
const rule = /[!@#$%^&*()+"":;'{}|\\//.?<>,]/
const AddCategories = async (req,res)=>{
    try {
       const {name,code} = req.body
       const category = {
        category_name: name.replace(/^\w/, (c) => c.toUpperCase()),
        category_code : code.toUpperCase()
       }

    if(!name || !code){
        res.status(406).json({
            message : `Forms can't empty`
        })
    }else if (rule.test(name) || rule.test(code)) {
        res.status(406).json({
            message : 'Enter valid data'
        })
    }
    else{

        await Asset_Category.create(category)
        res.json({
            code: 200,
            message: 'Success!, category has been created',
            
          })
    }

    } catch (error) {
        for (const err of error.errors){
            res.status(409).json({
                message: err.message,
                type: err.type,
                key : err.validatorKey
            })
        }
    }

}

module.exports = AddCategories