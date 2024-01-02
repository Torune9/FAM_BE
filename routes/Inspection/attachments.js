const attachRouter = require('express').Router()

const createAttachment = require('../../Controllers/inspect/attachment/createInspection')
const getAttachmentInspect = require('../../Controllers/inspect/attachment/getAttachmentInspect')

const auditorAcc = require('../../Services/authorization/auditor')
const {filters,uploads} = require('../../Services/utils/attachmentsUploads')

attachRouter.post('/asset/attachment/:id/:code',auditorAcc,uploads.array('files'),createAttachment)
attachRouter.get('/asset/attachment/:code',getAttachmentInspect)
attachRouter.use(filters)

module.exports = attachRouter