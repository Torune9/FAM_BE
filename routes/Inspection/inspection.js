const inspectRouter = require('express').Router()

const getInspection = require('../../Controllers/inspect/history/getInspection')

inspectRouter.get('/asset/histories/',getInspection)

module.exports = inspectRouter