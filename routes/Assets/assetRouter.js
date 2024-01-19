const assetRouter = require('express').Router()

const  GetAsset =  require('../../Controllers/Assets/assets/getAsset')
const  AddAsset =  require('../../Controllers/Assets/assets/addAsset')
const  DeleteSoftAsset = require('../../Controllers/Assets/assets/deleteAsset')
const  UpdateAsset = require('../../Controllers/Assets/assets/updateAsset')
const  RestoreAsset = require('../../Controllers/Assets/assets/restoreAsset')

assetRouter.get('/asset',GetAsset)
assetRouter.post('/asset',AddAsset)
assetRouter.put('/asset/:id',UpdateAsset)
assetRouter.delete('/asset/:id',DeleteSoftAsset)
assetRouter.put('/asset/:id/restore',RestoreAsset)

module.exports = assetRouter