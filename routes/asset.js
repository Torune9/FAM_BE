const routerAsset = require('express').Router()
const {authenticateAdmin} = require('../Services/auth')
const {
    getCategories,
    AddCategories,
    AddMdAsset,
    AddAsset,
    getMdAssetList,
    DeleteSoftCategory,
    DeleteSoftAsset,
    UpdateAsset,
    UpdateMdAsset,
    UpdateCategoryAsset,
    RestoreCategory
} = require('../Controllers/Assets/AssetCotroller')

routerAsset.get('/asset/categories',getCategories)
routerAsset.post('/asset/categories',AddCategories)
routerAsset.put('/asset/categories/:id',UpdateCategoryAsset)
routerAsset.delete('/asset/categories/:id',DeleteSoftCategory)
routerAsset.get('/asset/categories/:id',RestoreCategory)

routerAsset.get('/master-asset',authenticateAdmin,getMdAssetList)
routerAsset.post('/master-asset',authenticateAdmin,AddMdAsset)
routerAsset.put('/master-asset/:id',authenticateAdmin,UpdateMdAsset)

routerAsset.post('/asset',AddAsset)
routerAsset.put('/asset/:id',UpdateAsset)
routerAsset.delete('/asset/:id',DeleteSoftAsset)

module.exports = routerAsset