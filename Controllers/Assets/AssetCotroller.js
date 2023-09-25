const {Asset,Asset_Category,MD_Asset, Sequelize} = require('./../../models')
const rule = /[!@#$%^&*()+"":;'{}|\\//.?<>,]/

const getCategories = async (req, res) => {
    try {
        const { status = false, 
                search = '' } = req.query;

        const categories = await Asset_Category.findAll({
            attributes: ['id', 'category_name', 'category_code', 'is_deleted'],
            order: [['id', 'DESC']],
            where: {
               is_deleted : status,
               category_name: {
                [Sequelize.Op.like]: `%${search}%`
            }
            }
        });

        res.json({
            code: 200,
            message: 'success',
            result: {
                content: categories
            }
        });
    } catch (error) {
        res.json({
            error: error.message // Use error.message to get the error message
        });
    }
};


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

const UpdateCategoryAsset = async (req, res) => {
    try {
        const { name, code } = req.body
        const { id } = req.params

        let updateData = {}

        if (!name && !code) {
            return res.json({
                message : 'All field required'
            })
        }

        
        if (name) {
            const existingCategoryName = await Asset_Category.findOne({
                where: { category_name: name }
            })
            
            if (existingCategoryName) {
                return res.json({
                    message: `Category with name : ${name} already exists.`
                })
            }
            
            updateData.category_name = name.replace(/^\w/, (c) => c.toUpperCase())
            
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

const RestoreCategory = async (req,res)=>{
    try {
        const {id} = req.params
        const data = await Asset_Category.findOne({where : {id : id}})
        
        if (data) {
            await Asset_Category.update(
                {is_deleted : false},
                {where : 
                    {id : id}
                },
                )
            res.json({
                status : 'Ok',
                message : `Has been restore`
               })
        }else{
            res.status(404)
            res.json({
                message : `Failed to delete,Code: ${code} not found!`,
                code : res.statusCode,
            })
          
       }
        
    } catch (error) {
        res.json({
            eror : error
        })
    }
}




const getMdAssetList = async (req,res)=>{
    try{
        const { status = false,
                search = ''} = req.query
        const masterAsset = await MD_Asset.findAll({
            attributes : ['id','name','category_code','is_deleted','status','createdAt'],
            order: [['id', 'DESC']],
            where: {
                is_deleted : status,
                name: {
                 [Sequelize.Op.like]: `%${search}%`
             }
            }
        })
        return res.json({
            code: 200,
            message: 'success',
            result: {
                content : masterAsset,
            } 
        })
    }catch(error){
        res.json({
            error : error.message
        })
    }
}

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
        res.json({
            message : 'Name | Code | Price can not be empty!',
        })
    }else if (rule.test(name) || rule.test(code) || rule.test(price)) {
        res.json({
            message : 'Enter valid data',
        })
    }
    else{
        if (category) {     
            await MD_Asset.create(asset)
            res.json({
                status : 'OK!',
                message: 'Success!, asset has been created',
            })
        }else{
            res.json({
                message : `Category Not Found!`,
            })
        }
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

const UpdateMdAsset = async (req, res) => {
    try {
        const { status,name, code } = req.body;
        const { id } = req.params;
        const master = await MD_Asset.findOne({
            where: {
                id: id
            }
        });

        if (!master) {
            return res.json({
                message: 'Failed Update,Asset Not Found!'
            });
        }

        const categories = await Asset_Category.findAll({
            attributes: ['category_code', 'category_name']
        });

        if (!name || !status || !code) {
            return res.status(203).json({
                message : 'Failed Update,All fields are requred!!'
            })
        }
        if (name) {
            const nameAsset = await MD_Asset.findOne({
                where: {
                    name: name.replace(/^\w/, (c) => c.toUpperCase()),
                    id: {
                        [Sequelize.Op.ne]: id
                    }
                }
            });

            if (nameAsset) {
                return res.json({
                    message: `Failed Update,${name} already exists.`
                });
            } else {
                master.name = name.replace(/^\w/, (c) => c.toUpperCase());
            }
        }


        if (code) {
            const category = categories.find(category => category.category_code == code);
            if (category) {
                master.category_code = code;
            } else {
                return res.json({
                    message: 'Failed Update,Category not found!'
                });
            }
        }

        master.status = status !== undefined ? status : master.status;
        await master.save();

        return res.json({
            message: 'Asset has been updated.'
        });
    } catch (error) {
        res.json({
            error: error.message
        });
    }
};


const AddAsset = async (req,res)=>{
    try {
        const {name,quantity,category_code} = req.body
        const masterAsset = await MD_Asset.findAll()
        const master = masterAsset.find(master => master.category_code == category_code)

        if (!category_code || !name || !quantity) {
            return res.json({
                message : `All fields can't be empty`
            })
        }
 
         if (!master) {   
            res.status(404)
            return res.json({
                code : res.statusCode,
                message : `Category Not Found!`,
            })    
         }

         await Asset.create({
            name : name,
            quantity : quantity,
            asset_code : category_code
         })
         res.json({
                status : 'OK!',
                message: 'Success!, asset has been created',
            })
 
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
    getMdAssetList,
    AddMdAsset,
    AddAsset,
    DeleteSoftCategory,
    DeleteSoftAsset,
    UpdateMdAsset,
    UpdateAsset,
    UpdateCategoryAsset,
    RestoreCategory
}