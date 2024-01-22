const masterRouter = require('express').Router()

const authenticateAdmin = require('../../Services/authorization/admin')

const AddMdAsset =  require('../../Controllers/Assets/master_assets/addMdAsset')
const getMdAssetList =  require('../../Controllers/Assets/master_assets/getMdAsset')
const UpdateMdAsset = require('../../Controllers/Assets/master_assets/updateMdAsset')
const DeleteSoftMdAsset = require('../../Controllers/Assets/master_assets/deleteMdAsset')
const restoreMdAsset = require('../../Controllers/Assets/master_assets/restoreMdAsset')

masterRouter.get('/master-assets',authenticateAdmin,getMdAssetList)

masterRouter.post('/master-asset',authenticateAdmin,AddMdAsset)

masterRouter.put('/master-asset/:id',authenticateAdmin,UpdateMdAsset)

masterRouter.delete('/master-asset/:id',DeleteSoftMdAsset)

masterRouter.put('/master-asset/:id/restore',restoreMdAsset)

module.exports = masterRouter