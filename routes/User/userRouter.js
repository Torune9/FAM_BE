const userRouter = require('express').Router()

const ForgotContoller = require('../../Controllers/Action/ForgotController')
const ResetController = require('../../Controllers/Action/ResetController')
const GetUserController = require('../../Controllers/Action/GetUserController')
const updateUserController = require('../../Controllers/User/UpdateUserController')
const DeleteController = require('../../Controllers/User/DeleteUserController')

userRouter.get('/api/listUser',GetUserController.GetUserController)

userRouter.put('/api/update/:id',updateUserController.updateUserController)

userRouter.delete('/api/delete',DeleteController.DeleteController)

userRouter.post('/api/forgot',ForgotContoller.ForgotController)

userRouter.put('/api/reset-password/:token',ResetController.ResetController)

module.exports = userRouter