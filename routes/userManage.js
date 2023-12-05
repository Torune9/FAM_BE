const sysAdmin = require('express').Router()

const resetPassword = require('../Controllers/User/ManageAccount/resetPassword')
const deactivateAccount = require('../Controllers/User/ManageAccount/deactivateAccount')

sysAdmin.put('/api/users/reset-password/:id',resetPassword)
sysAdmin.get('/api/users/deactivate-account/:id/:value',deactivateAccount)

module.exports = sysAdmin