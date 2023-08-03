const router = require('express').Router()
const LoginController = require('../Controllers/Action/LoginController')
const ForgotContoller = require('../Controllers/Action/ForgotController')
const ResetController = require('../Controllers/Action/ResetController')
const AddUserController = require('../Controllers/User/AddUserController')
const updateUserController = require('../Controllers/User/UpdateUserController')
const DeleteController = require('../Controllers/User/DeleteUserController')

router.post('/api/add',AddUserController.AddUserController)

router.put('/api/update',updateUserController.updateUserController)

router.delete('/api/delete',DeleteController.DeleteController)

router.post('/api/authentication/login',LoginController.LoginController)

router.post('/api/forgot',ForgotContoller.ForgotController)

router.post('/api/reset',ResetController.ResetController)


module.exports = router