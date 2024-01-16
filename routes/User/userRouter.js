const userRouter = require('express').Router()
const {upload,filter} = require('../../Services/utils/imageUploads')

const ForgotContoller = require('../../Controllers/Action/ForgotController')
const {ResetController,sendLink} = require('../../Controllers/Action/ResetController')
const {GetUserController,GetUsernameById} = require('../../Controllers/Action/GetUserController')
const UpdateUserRole= require('../../Controllers/User/ManageAccount/UpdateUserRole')
const DeleteController = require('../../Controllers/User/DeleteUserController')
const{ manageUser,getImage} = require('../../Controllers/User/UserUpdateController')

userRouter.get('/api/listUser',GetUserController)

userRouter.get('/api/image/:id',getImage)

userRouter.get('/api/username/:id',GetUsernameById)

userRouter.put('/api/update/:id',UpdateUserRole)

userRouter.delete('/api/delete',DeleteController.DeleteController)

userRouter.post('/api/forgot',ForgotContoller.ForgotController)

userRouter.post ('/api/image/:id/upload',upload.single('image'),manageUser)
userRouter.use(filter)

userRouter.post('/api/new-password/:token',ResetController)

userRouter.get('/user/newPassword/:token',sendLink)

module.exports = userRouter