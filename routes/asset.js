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

routerAsset.post('/asset/add-category',AddCategories)
routerAsset.post('/asset/addMd-asset',AddMdAsset)
routerAsset.post('/asset/add-asset',AddAssets)
routerAsset.put('/asset/update-MdAsset',UpdateMdAsset)
routerAsset.put('/asset/update-Asset',UpdateAsset)
routerAsset.put('/asset/update-MdCategoryAsset',UpdateCategoryAsset)
routerAsset.delete('/asset/delete-category',DeleteSoftCategory)
routerAsset.delete('/asset/delete-asset',DeleteSoftAsset)

module.exports = routerAsset