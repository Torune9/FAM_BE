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
        res.json({
            message : 'Name and Code can not be empty!'
        })
    }else if (rule.test(name) || rule.test(code)) {
        res.json({
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
            res.json({
                code : 409,
                message: err.message,
                type: err.type,
                key : err.validatorKey
            })
        }
    }

}

module.exports = AddCategories