const {Asset,Asset_Category,MD_Asset} = require('./../../models')
const rule = /[!@#$%^&*()_+"":;'{}|\\//.?<>,]/

const getCategories = async (req,res)=>{
    try {
        const categories = await Asset_Category.findAll({
            attributes :['Categories_Name','Category_Code']
        })
        res.json({
            categories : categories
        })
    } catch (error) {
        res.send(error)
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

const AddCategories = async (req,res)=>{
    try {
       const {name,code} = req.body
       const category = {
        Categories_Name: name.replace(/^\w/, (c) => c.toUpperCase()),
        Category_Code : code.toUpperCase()
       }

    if(name.trim() == "" || code.trim() == ""){
        res.status(409)
        res.json({
            message : 'Name dan Code tidak boleh kosong!'
        })
    }else if (rule.test(name) || rule.test(code)) {
        res.status(409)
        res.json({
            message : 'Masukan Data Yang Valid'
        })
    }
    else{

        await Asset_Category.create(category)
        res.json({
            message : 'Category Berhasil Dimasukan'
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

const UpdateMdAsset = async (req,res)=>{
    try {
        const {status,price,name} = req.body
        const MdAssets = await MD_Asset.findAll()
        const updateMd =  MdAssets.find(md => md.name === name)

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

const UpdateAsset = async(req,res)=>{
    try {
        const {quantity,price,name} = req.body
        const Assets = await Asset.findAll()
        const updateAsset =  Assets.find(md => md.name === name)

        if (!updateAsset) {
           res.json({
            message : 'gagal Update'
           }) 
        }else{
            updateAsset.quantity = quantity
            updateAsset.price = price
            updateAsset.save()
            res.json({
                message : 'Berhasil Update'
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
const UpdateCategoryAsset = async(req,res)=>{
    try {
        const {name,code} = req.body
        const Categories = await Asset_Category.findAll()
        const updateCategory =  Categories.find(category => category.Category_Code === code.toUpperCase())

        if (!updateCategory) {
           res.json({
            message : 'gagal Update'
           }) 
        }else{
            updateCategory.Categories_Name = name.replace(/^\w/, (c) => c.toUpperCase())
            updateCategory.save()
            res.json({
                message : 'Berhasil Update'
            })
        }

    } catch (error) {
        
    }
}

const DeleteSoftCategory = async (req,res) =>{
    try {
        const {name} = req.body
       await Asset_Category.destroy({
        where : {
            Categories_Name : name
        }
       })
       res.json({
        message : 'Soft Deleted'
       })
        
    } catch (error) {
        res.send(error)
    }

}

const DeleteSoftAsset = async (req,res) => {
    try {
        const {name} = req.body
        const destroy = await Asset.destroy({
        where : {
            name : name
        }
       })

       if (destroy) {
           res.json({
            message : 'Soft Deleted'
           })
       }else{
        res.json({
            message : `${name} not found`
        })
       }
    } catch (error) {
        res.send(error)
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