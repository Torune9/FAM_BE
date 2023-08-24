const {Asset,Asset_Category,MD_Asset} = require('./../../models')
const rule = /[!@#$%^&*()+"":;'{}|\\//.?<>,]/

const getCategories = async (req,res)=>{
    try {
        const categories = await Asset_Category.findAll({
            attributes :['category_name','category_code']
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
            error : error.name,
            message : error.errors
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
            message: 'success data has been created',
            
          })
    }

    } catch (error) {
        res.json({
            erorr : error.name,
            message : error.errors[0].message
        })
    }

}
const UpdateCategoryAsset = async(req,res)=>{
    try {
        const {name} = req.body
        const Categories = await Asset_Category.findAll()
        const category = Categories.find((category) =>  req.params.code == category.category_code)
        if (!category) {
           res.json({
            message : 'gagal update',
           }) 
        }else{
            category.category_name = name.replace(/^\w/, (c) => c.toUpperCase())
            category.save()
            res.json({
                message : 'Berhasil Update'
            })
        }

    } catch (error) {
        res.json({message : error.message});
    }
}

const DeleteSoftCategory = async (req,res) =>{
    try {
        const {code} = req.params
       const del = await Asset_Category.destroy({
        where : {
            category_code : code
        }
       })

       if (!del) {
        res.json({
            message : 'Failed to delete!'
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