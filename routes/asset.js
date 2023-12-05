const routerAsset = require('express').Router()
const authenticateAdmin = require('../Services/authorization/admin')
const auditorAcc = require('../Services/authorization/auditor')
const inspectorAcc = require('../Services/authorization/inspector')
const {filters,uploads} = require('../Services/utils/attachmentsUploads')
const {filter,upload} = require ('../Services/utils/imageUploads')
const path = require('path')



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
const  DeleteSoftAsset = require('../Controllers/Assets/assets/deleteAsset')
const  UpdateAsset = require('../Controllers/Assets/assets/updateAsset')
const  RestoreAsset = require('../Controllers/Assets/assets/restoreAsset')

const createInspect = require('../Controllers/inspect/history/createInspection')
const getInspection = require('../Controllers/inspect/history/getInspection')


const createAttachment = require('../Controllers/inspect/attachment/createInspection')
const getAttachmentInspect = require('../Controllers/inspect/attachment/getAttachmentInspect')


const getStatusCategory = require('../Controllers/inspect/category/getStatusCategory')
const createStatusCategory = require('../Controllers/inspect/category/createStatusCategory')



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
routerAsset.put('/asset/:id/restore',RestoreAsset)

routerAsset.post('/asset/:code/inspection',inspectorAcc,upload.single('files'),createInspect)
routerAsset.get('/asset/history/',getInspection)
routerAsset.use(filter)

routerAsset.post('/asset/attachment/:code',auditorAcc,uploads.array('files'),createAttachment)
routerAsset.get('/asset/attachment/:code',getAttachmentInspect)
routerAsset.use(filters)

routerAsset.get('/asset/status',getStatusCategory)
routerAsset.post('/asset/status',createStatusCategory)
routerAsset.get('/uploads/:file')


module.exports = routerAsset