const router = require('express').Router()
const LoginController = require('../Controllers/LoginController')
const  ForgotContoller = require('../Controllers/ForgotController')
const ResetController = require('../Controllers/ResetController')
router.post('/api/authentication/login',LoginController.LoginController)

router.post('/api/forgot',ForgotContoller.ForgotController)

router.post('/api/reset',ResetController.ResetController)


module.exports = router