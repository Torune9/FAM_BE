const categoryRouter = require('express').Router()

const  getCategories = require('../../Controllers/Assets/categories/getCategory')
const  AddCategories = require('../../Controllers/Assets/categories/addCategory')
const  DeleteSoftCategory = require('../../Controllers/Assets/categories/deleteCategory')
const  UpdateCategoryAsset = require('../../Controllers/Assets/categories/updateCategory')
const  RestoreCategory= require('../../Controllers/Assets/categories/restoreCategory')

categoryRouter.get('/asset/categories',getCategories)

categoryRouter.post('/asset/category',AddCategories)

categoryRouter.put('/asset/category/:id',UpdateCategoryAsset)

categoryRouter.delete('/asset/category/:id',DeleteSoftCategory)

categoryRouter.get('/asset/category/:id',RestoreCategory)

module.exports = categoryRouter