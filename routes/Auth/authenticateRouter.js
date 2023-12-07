const authRouter = require('express').Router()

const LoginController = require('../../Controllers/Action/LoginController')
const RegisterController = require('../../Controllers/Action/RegisterController')

authRouter.post('/api/register',RegisterController.register)
authRouter.post('/api/authentication/login',LoginController.LoginController)

module.exports = authRouter