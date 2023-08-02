const router = require('express').Router()
const LoginController = require('../Controllers/LoginController')
const ForgotContoller = require('../Controllers/ForgotController')
const ResetController = require('../Controllers/ResetController')
const AddUserController = require('../Controllers/AddUserController')
const updateUserController = require('../Controllers/UpdateUserController')
const DeleteController = require('../Controllers/DeleteController')

router.post('/api/add',AddUserController.AddUserController)

router.put('/api/update',updateUserController.updateUserController)

router.delete('/api/delete',DeleteController.DeleteController)

router.post('/api/authentication/login',LoginController.LoginController)

router.post('/api/forgot',ForgotContoller.ForgotController)

router.post('/api/reset',ResetController.ResetController)


module.exports = router