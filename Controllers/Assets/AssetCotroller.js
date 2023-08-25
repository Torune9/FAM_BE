const { name } = require('ejs')
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
            message : 'Name dan Code tidak boleh kosong!'
        })
    }else if (rule.test(name) || rule.test(code)) {
        res.json({
            message : 'Masukan Data Yang Valid'
        })
    }
    else{

        await Asset_Category.create(category)
        res.json({
            code: 200,
            message: 'Success!, data has been created',
            
          })
    }

    } catch (error) {

        for (const err of error.errors){
            res.json({
                error: err.message,
                type: err.type,
                key : err.validatorKey
            })
        }
    }

}

const UpdateCategoryAsset = async(req,res)=>{
    try{
        const {newName,newCode} = req.body
        const {code} = req.params
        const existingCategory = await Asset_Category.findOne({
            where : { 
                [Sequelize.Op.or] : [
                    {category_code : newCode},
                    {category_name :newName}
                ]
            }
        })
        if (existingCategory) {
            res.json({
                message : `Category with new code or name already exist`
            })
        }else{
            await Asset_Category.update({
                category_code : newCode,
                category_name : newName
            },{
                where : {category_code : code}
            })

            res.json({
                message : 'Category has successfully updated!'
            })
        }


    }catch(error){
        res.json({
            message : error.message
        })
    }
}

const DeleteSoftCategory = async (req,res) =>{
    try {
        const {code} = req.params
       const del = await Asset_Category.update(
        {is_deleted : true},
        {where : 
            {category_code : code}
        },
        )

       if (!del) {
        res.json({
            message : `Failed to delete,Code: not found!`
        })
       }else{
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

const UpdateMdAsset = async (req,res)=>{
    try {
        const {status,price} = req.body
        const MdAssets = await MD_Asset.findAll()
        const updateMd =  MdAssets.find(md => md.asset_code === req.params.code)

        if (!updateMd) {
           res.json({
            message : 'gagal Update'
           }) 
        }else{
            updateMd.status = status
            updateMd.price = price
            updateMd.save()
            res.json({
                message : 'Berhasil Update'
            })
        }

    } catch (error) {
        
    }
}

const AddMdAsset = async (req,res)=>{
    try {
       const {name,code,price} = req.body
       const asset = {
        name: name.replace(/^\w/, (c) => c.toUpperCase()),
        price :price,
        asset_code : code.toUpperCase(),
        status : 'Aktif',
       }

    if(name.trim() == "" || code.trim() == "" || price.trim() == ""){
        res.status(409)
        res.json({
            message : 'Name | Code | Quantity tidak boleh kosong!',
            code : res.statusCode
        })
    }else if (rule.test(name) || rule.test(code) || rule.test(price)) {
        res.status(409)
        res.json({
            message : 'Masukan Data Yang Valid',
            code : res.statusCode
        })
    }
    else{
        await MD_Asset.create(asset)
        res.json({
            status : 'OK!',
            message : `Asset ${name} berhasil ditambahkan`,
        })
    }

    } catch (error) {
        res.send(error)
    }

}


const AddAssets = async (req,res)=>{
    try {
       const {name,code,quantity} = req.body
       const rule = /[!@#$%^&*()_+"":;'{}|\\//.?<>,]/
       const asset = {
        name: name.replace(/^\w/, (c) => c.toUpperCase()),
        quantity :quantity,
        asset_code : code.toUpperCase(),
       }

    if(name.trim() == "" || code.trim() == "" || quantity.trim() == ""){
        res.status(409)
        res.json({
            message : 'Name | Code | Quantity tidak boleh kosong!',
            code : res.statusCode
        })
    }else if (rule.test(name) || rule.test(code) || rule.test(quantity)) {
        res.status(409)
        res.json({
            message : 'Masukan Data Yang Valid',
            code : res.statusCode
        })
    }
    else{
        await Asset.create(asset)
        res.json({
            status : 'OK!',
            message : `Asset ${name} berhasil ditambahkan`,
        })
    }

    } catch (error) {
        res.send(error)
    }

}

const UpdateAsset = async(req,res)=>{
    try {
        const {quantity,price} = req.body
        const Assets = await Asset.findAll()
        const updateAsset =  Assets.find(md => md.asset_code === req.params.code)

        if (!updateAsset) {
           res.json({
            message : 'gagal Update'
           }) 
        }else{
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
        const {code} = req.params
        const destroy = await Asset.destroy({
        where : {
            asset_code : code
        }
       })

       if (destroy) {
           res.json({
            message : 'Soft Deleted'
           })
       }else{
        res.json({
            message : `${code} not found`
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
    AddAssets,
    DeleteSoftCategory,
    DeleteSoftAsset,
    UpdateMdAsset,
    UpdateAsset,
    UpdateCategoryAsset,
}