const {Asset_Category} = require('../../../models')

const UpdateCategoryAsset = async (req, res) => {
    try {
        const { name, code } = req.body
        const { id } = req.params

        let updateData = {}

        if (!name && !code) {
            return res.status(406).json({
                message : 'All field required'
            })
        }

        
        if (name) {
            const existingCategoryName = await Asset_Category.findOne({
                where: { category_name: name }
            })
            
            if (existingCategoryName) {
                return res.status(409).json({
                    message: `Name : ${name},already exists`
                })
            }
            
            updateData.category_name = name.replace(/^\w/, (c) => c.toUpperCase())
            
        }
        
        if (code) {
            
            const existingCategoryCode = await Asset_Category.findOne({
                where: { category_code: code.toUpperCase() }
            })
            
            if (existingCategoryCode) {
                return res.status(409).json({
                    message: `Code : ${code},already exists`
                })
                
            }
            
            updateData.category_code = code.toUpperCase()
        }
        
        await Asset_Category.update(updateData, {
            where: { id: id }
        })
        

        res.json({
            message: "Category has been successfully updated!"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = UpdateCategoryAsset