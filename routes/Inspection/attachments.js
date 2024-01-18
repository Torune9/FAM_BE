const attachRouter = require('express').Router()

const createAttachment = require('../../Controllers/inspect/attachment/createInspection')
const getAttachmentInspect = require('../../Controllers/inspect/attachment/getAttachmentInspect')

const inspectorAcc = require('../../Services/authorization/inspector')
const {filters,uploads} = require('../../Services/utils/attachmentsUploads')

attachRouter.post('/asset/attachment/:id/:code',inspectorAcc,uploads.array('files'),createAttachment)
attachRouter.get('/asset/attachment/:id',getAttachmentInspect)
attachRouter.use(filters)

module.exports = attachRouter