const sysAdminRouter = require('express').Router()

const resetPassword = require('../../Controllers/User/ManageAccount/resetPassword')
const UpdateUserRole= require('../../Controllers/User/ManageAccount/updateUserRole')
const deactivateAccount = require('../../Controllers/User/ManageAccount/deactivateAccount')

sysAdminRouter.put('/api/users/:id/reset-password',resetPassword)

sysAdminRouter.get('/api/users/:id/:value/deactivate-account',deactivateAccount)

sysAdminRouter.put('/api/role/:id/update',UpdateUserRole)

module.exports = sysAdminRouter