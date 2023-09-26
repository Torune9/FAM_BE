const routerAsset = require('express').Router()
const {authenticateAdmin} = require('../Services/auth')
const  getCategories = require('../Controllers/Assets/categories/getCategory')
const  AddCategories = require('../Controllers/Assets/categories/addCategory')
const  DeleteSoftCategory = require('../Controllers/Assets/categories/deleteCategory')
const  UpdateCategoryAsset = require('../Controllers/Assets/categories/updateCategory')
const  RestoreCategory= require('../Controllers/Assets/categories/restoreCategory')

const  AddMdAsset =  require('../Controllers/Assets/master_assets/addMdAsset')
const  getMdAssetList =  require('../Controllers/Assets/master_assets/getMdAsset')
const  UpdateMdAsset = require('../Controllers/Assets/master_assets/updateMdAsset')

const  AddAsset =  require('../Controllers/Assets/assets/addAsset')
const  DeleteSoftAsset = require('../Controllers/Assets/assets/deleteAsset')
const  UpdateAsset = require('../Controllers/Assets/assets/updateAsset')

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