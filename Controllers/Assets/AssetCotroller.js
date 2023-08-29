const {Asset,Asset_Category,MD_Asset, Sequelize} = require('./../../models')
const rule = /[!@#$%^&*()+"":;'{}|\\//.?<>,]/

const getCategories = async (req,res)=>{
    try {
        const categories = await Asset_Category.findAll({
            attributes :['category_name','category_code'],
            where : {
                is_deleted : false
            }
        })
        res.json({
            code: 200,
            message: 'success',
            result: {
               content : categories
             } 
          })
    } catch (error) {
       res.json({
        error : error
       })
    }

}

const AddCategories = async (req,res)=>{
    try {
       const {name,code} = req.body
       const category = {
        category_name: name.replace(/^\w/, (c) => c.toUpperCase()),
        category_code : code.toUpperCase()
       }

    if(name.trim() == "" || code.trim() == ""){
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
            res.status(409)
            res.json({
                code : res.statusCode,
                error: err.message,
                type: err.type,
                key : err.validatorKey
            })
        }
    }

}

const UpdateCategoryAsset = async (req, res) => {
    try {
        const { name, code } = req.body
        const { id } = req.params

        let updateData = {}
        
        if (name) {
            const existingCategoryName = await Asset_Category.findOne({
                where: { category_name: name }
            })

            if (existingCategoryName) {
                return res.json({
                    message: `Category with name : ${name} already exists.`
                })
            }

            updateData.category_name = name
        }

        if (code) {
            const existingCategoryCode = await Asset_Category.findOne({
                where: { category_code: code }
            })

            if (existingCategoryCode) {
                return res.json({
                    message: `Category with code : ${code} already exists.`
                })
            }

            updateData.category_code = code
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

const AddMdAsset = async (req,res)=>{
    try {
       const {name,code,price} = req.body
       const asset = {
        name: name.replace(/^\w/, (c) => c.toUpperCase()),
        price :price,
        category_code : code.toUpperCase(),
        status : 'Aktif',
        is_deleted : false
       }

    if(name.trim() == "" || code.trim() == "" || price.trim() == ""){
        res.status(409)
        res.json({
            message : 'Name | Code | Quantity can not be empty!',
            code : res.statusCode
        })
    }else if (rule.test(name) || rule.test(code) || rule.test(price)) {
        res.status(409)
        res.json({
            message : 'Enter valid data',
            code : res.statusCode
        })
    }
    else{
        await MD_Asset.create(asset)
        res.json({
            status : 'OK!',
            message: 'Success!, asset has been created',
        })
    }

    } catch (error) {
        for (const err of error.errors){
            res.status(409)
            res.json({
                code : res.statusCode,
                error: err.message,
                type: err.type,
                key : err.validatorKey
            })
        }
    }

}

const UpdateMdAsset = async (req,res)=>{
    try {
        const {status,price,name} = req.body
        const {id} = req.params
        const master = await MD_Asset.findOne({
            where : {
                id : id
            }
        })

        
        if (name) {
            const nameAsset = await MD_Asset.findOne({
                where: { name: name.replace(/^\w/, (c) => c.toUpperCase()) }
            })

            if (nameAsset) {
                return res.json({
                    message: `${name} already exists.`
                })
            }else{
                await MD_Asset.update({name :name.replace(/^\w/, (c) => c.toUpperCase())},{where : {
                    id :id
                }})
                return res.json({
                    message: 'Asset has updated.'
                })
            }
        }
        
        if (!master) {
            res.json({
                message : 'Asset Not Found!'
            })
        }else{
            master.status = status
            master.price = price
            master.save()
            res.json({
                message : 'Asset has updated.'
            })
        }

    } catch (error) {
        res.json({
            error : error.message
        })
    }
}

const AddAsset = async (req,res)=>{
    try {
       const {name,code,quantity,price} = req.body
       const asset = {
        name: name.replace(/^\w/, (c) => c.toUpperCase()),
        quantity :quantity,
        asset_code : code.toUpperCase(),
        price : price
       }

    if(name.trim() == "" || code.trim() == "" || quantity.trim() == ""){
        res.status(409)
        res.json({
            message : 'Name | Code | Quantity can not be empty!',
            code : res.statusCode
        })
    }else if (rule.test(name) || rule.test(code) || rule.test(quantity)) {
        res.status(409)
        res.json({
            message : 'Enter valid data!',
            code : res.statusCode
        })
    }
    else{
        await Asset.create(asset)
        res.json({
            status : 'OK!',
            message: 'Success!, category has been created',
        })
    }

    } catch (error) {
        res.send(error)
    }

}

const UpdateAsset = async(req,res)=>{
    try {
        const {quantity,price,name} = req.body
        const Assets = await Asset.findAll()
        const updateAsset =  Assets.find(md => md.id == req.params.id)

        if (!updateAsset) {
           res.json({
            message : 'Update failed!'
           }) 
        }else{
            updateAsset.name = name
            updateAsset.quantity = quantity
            updateAsset.price = price
            updateAsset.save()
            res.json({
                status : 'Ok!',
                message : 'Updated',
                updateAt : updateAsset.updatedAt
            })
        }

    } catch (error) {
        res.send(error)
    }



    //update asset berdasarkan mdasset
    // const MdAssets = await MD_Asset.findAll()
    // const MdAsset = MdAssets.find(asset => asset.name == name)
    // if (MdAsset) {
    //     const totalPrice = MdAsset.price * quantity
    //     await Asset.update({
    //         price :  totalPrice,
    //         quantity : quantity,
    //     },{
    //         where : {name : name}
    //     })
    //     res.json({
    //         message : `update berhasil`
    //     })
    // }else if(!MdAsset){
    //     await Asset.update({
    //         quantity : quantity,
    //         price :  price * quantity,
    //     },{
    //         where : {name : name}
    //     })
    //     res.json({
    //         message : `update berhasil`
    //     })
    // }else{
    //     res.json({
    //         message : 'gagal update'
    //     })
    // }

    
}

const DeleteSoftAsset = async (req,res) => {
    try {
        const {id} = req.params
        const asset = await Asset.findOne({
            where : {
                id : id
            }
        })

       if (!asset) {
           res.json({
               message : `${id} not found`
           })
        }else{
            asset.is_deleted = true
            await asset.save()
           res.json({
            message : 'Soft Deleted'
           })
       }
    } catch (error) {
        res.send(error.message)
    }

}

module.exports = {
    getCategories,
    AddCategories,
    AddMdAsset,
    AddAsset,
    DeleteSoftCategory,
    DeleteSoftAsset,
    UpdateMdAsset,
    UpdateAsset,
    UpdateCategoryAsset,
}