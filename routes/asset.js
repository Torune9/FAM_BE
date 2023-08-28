const routerAsset = require('express').Router()
const {
    getCategories,
    AddCategories,
    AddMdAsset,
    AddAssets,
    DeleteSoftCategory,
    DeleteSoftAsset,
    UpdateAsset,
    UpdateMdAsset,
    UpdateCategoryAsset
} = require('../Controllers/Assets/AssetCotroller')

routerAsset.get('/asset/categories',getCategories)
routerAsset.post('/asset/categories',AddCategories)
routerAsset.put('/asset/categories/:id',UpdateCategoryAsset)
routerAsset.delete('/asset/categories/:id',DeleteSoftCategory)

routerAsset.post('/master-asset',AddMdAsset)
routerAsset.put('/master-asset/:id',UpdateMdAsset)

routerAsset.post('/asset',AddAssets)
routerAsset.put('/asset/:code',UpdateAsset)
routerAsset.delete('/asset/:code',DeleteSoftAsset)

module.exports = routerAsset