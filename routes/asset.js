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
routerAsset.put('/asset/categories/:code',UpdateCategoryAsset)
routerAsset.delete('/asset/categories/:code',DeleteSoftCategory)

routerAsset.post('/master-asset',AddMdAsset)
routerAsset.put('/master-asset/:code',UpdateMdAsset)

routerAsset.post('/assets',AddAssets)
routerAsset.put('/assets/:code',UpdateAsset)
routerAsset.delete('/assets/:code',DeleteSoftAsset)

module.exports = routerAsset