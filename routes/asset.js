const routerAsset = require('express').Router()
const {authenticateAdmin} = require('../Services/auth')
const {auditorAcc} = require('../Services/auditor')
const {filter,upload} = require('../Services/upload')



const  getCategories = require('../Controllers/Assets/categories/getCategory')
const  AddCategories = require('../Controllers/Assets/categories/addCategory')
const  DeleteSoftCategory = require('../Controllers/Assets/categories/deleteCategory')
const  UpdateCategoryAsset = require('../Controllers/Assets/categories/updateCategory')
const  RestoreCategory= require('../Controllers/Assets/categories/restoreCategory')

const  AddMdAsset =  require('../Controllers/Assets/master_assets/addMdAsset')
const  getMdAssetList =  require('../Controllers/Assets/master_assets/getMdAsset')
const  UpdateMdAsset = require('../Controllers/Assets/master_assets/updateMdAsset')

const  GetAsset =  require('../Controllers/Assets/assets/getAsset')
const  AddAsset =  require('../Controllers/Assets/assets/addAsset')
const  {DeleteSoftAsset,DeletePermanentAsset} = require('../Controllers/Assets/assets/deleteAsset')
const  UpdateAsset = require('../Controllers/Assets/assets/updateAsset')
const RestoreAsset = require('../Controllers/Assets/assets/restoreAsset')

const createInspect = require('../Controllers/inspect/createInspection')
const getInspection = require('../Controllers/inspect/getInspection')


const createAttachment = require('../Controllers/inspect/attachment/createInspection')
const getAttachmentInspect = require('../Controllers/inspect/attachment/getAttachmentInspect')


const getStatusCategory = require('../Controllers/inspect/category/getStatusCategory')



routerAsset.get('/asset/categories',getCategories)
routerAsset.post('/asset/categories',AddCategories)
routerAsset.put('/asset/categories/:id',UpdateCategoryAsset)
routerAsset.delete('/asset/categories/:id',DeleteSoftCategory)
routerAsset.get('/asset/categories/:id',RestoreCategory)


routerAsset.get('/master-asset',authenticateAdmin,getMdAssetList)
routerAsset.post('/master-asset',authenticateAdmin,AddMdAsset)
routerAsset.put('/master-asset/:id',authenticateAdmin,UpdateMdAsset)

routerAsset.get('/asset',GetAsset)
routerAsset.post('/asset',AddAsset)
routerAsset.put('/asset/:id',UpdateAsset)
routerAsset.delete('/asset/:id',DeleteSoftAsset)
routerAsset.put('/asset/restore/:id',RestoreAsset)
routerAsset.delete('/asset/:id/deleted',DeletePermanentAsset)

routerAsset.post('/asset/:code/inspection',auditorAcc,createInspect)
routerAsset.get('/asset/history/',getInspection)

routerAsset.post('/asset/attachment/:code',upload.single('files'),createAttachment)
routerAsset.get('/asset/attachment/:code',getAttachmentInspect)

routerAsset.get('/asset/status',getStatusCategory)

routerAsset.use(filter)

module.exports = routerAsset