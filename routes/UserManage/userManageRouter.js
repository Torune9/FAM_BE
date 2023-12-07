const sysAdminRouter = require('express').Router()

const resetPassword = require('../../Controllers/User/ManageAccount/resetPassword')
const deactivateAccount = require('../../Controllers/User/ManageAccount/deactivateAccount')

sysAdminRouter.put('/api/users/reset-password/:id',resetPassword)
sysAdminRouter.get('/api/users/deactivate-account/:id/:value',deactivateAccount)

module.exports = sysAdminRouter