const statusRouter = require('express').Router()

const getStatusCategory = require('../../Controllers/inspect/category/getStatusCategory')
const createStatusCategory = require('../../Controllers/inspect/category/createStatusCategory')

statusRouter.get('/asset/status',getStatusCategory)
statusRouter.post('/asset/status',createStatusCategory)

module.exports = statusRouter