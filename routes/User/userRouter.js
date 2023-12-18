const userRouter = require('express').Router()
const {upload,filter} = require('../../Services/utils/imageUploads')

const ForgotContoller = require('../../Controllers/Action/ForgotController')
const ResetController = require('../../Controllers/Action/ResetController')
const GetUserController = require('../../Controllers/Action/GetUserController')
const updateUserController = require('../../Controllers/User/UpdateUserController')
const DeleteController = require('../../Controllers/User/DeleteUserController')
const{ UploadImageUser,getImage} = require('../../Controllers/User/UserImageController')

userRouter.get('/api/listUser',GetUserController.GetUserController)
userRouter.get('/api/image/:id',getImage)

userRouter.put('/api/update/:id',updateUserController.updateUserController)

userRouter.delete('/api/delete',DeleteController.DeleteController)

userRouter.post('/api/forgot',ForgotContoller.ForgotController)

userRouter.post ('/api/image/:id/upload',upload.single('image'),UploadImageUser)
userRouter.use(filter)

userRouter.put('/api/reset-password/:token',ResetController.ResetController)

module.exports = userRouter