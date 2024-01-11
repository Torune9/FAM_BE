const inspectRouter = require('express').Router()

const getInspection = require('../../Controllers/inspect/history/getInspection')

inspectRouter.get('/asset/history/',getInspection)

module.exports = inspectRouter