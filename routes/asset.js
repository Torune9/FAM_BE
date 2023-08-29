const routerAsset = require('express').Router()
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
    UpdateCategoryAsset
} = require('../Controllers/Assets/AssetCotroller')

routerAsset.get('/asset/categories',getCategories)
routerAsset.post('/asset/categories',AddCategories)
routerAsset.put('/asset/categories/:id',UpdateCategoryAsset)
routerAsset.delete('/asset/categories/:id',DeleteSoftCategory)

routerAsset.get('/master-asset',getMdAssetList)
routerAsset.post('/master-asset',AddMdAsset)
routerAsset.put('/master-asset/:id',UpdateMdAsset)

routerAsset.post('/asset',AddAsset)
routerAsset.put('/asset/:id',UpdateAsset)
routerAsset.delete('/asset/:id',DeleteSoftAsset)

module.exports = routerAsset