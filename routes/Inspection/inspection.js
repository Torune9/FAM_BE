const inspectRouter = require('express').Router()

const createInspect = require('../../Controllers/inspect/history/createInspection')
const getInspection = require('../../Controllers/inspect/history/getInspection')

const inspectorAcc = require('../../Services/authorization/inspector')
const {filter,upload} = require ('../../Services/utils/imageUploads')

inspectRouter.post('/asset/:id/inspection',inspectorAcc,upload.array('images'),createInspect)
inspectRouter.get('/asset/history/',getInspection)
inspectRouter.use(filter)

module.exports = inspectRouter