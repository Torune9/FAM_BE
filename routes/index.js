const router = require('express').Router()
const LoginController = require('../Controllers/Action/LoginController')
const ForgotContoller = require('../Controllers/Action/ForgotController')
const ResetController = require('../Controllers/Action/ResetController')
const GetUserController = require('../Controllers/Action/GetUserController')
const RegisterController = require('../Controllers/Action/RegisterController')
const updateUserController = require('../Controllers/User/UpdateUserController')
const DeleteController = require('../Controllers/User/DeleteUserController')

router.get('/api/listUser',GetUserController.GetUserController)

router.post('/api/register',RegisterController.register)

router.post('/api/authentication/login',LoginController.LoginController)

router.put('/api/update/:id',updateUserController.updateUserController)

router.delete('/api/delete',DeleteController.DeleteController)

router.post('/api/forgot',ForgotContoller.ForgotController)

router.put('/api/reset-password/:token',ResetController.ResetController)

module.exports = router