const assetRouter = require('../../routes/Assets/assetRouter')
const categoryRouter = require('../../routes/Assets/categoriesRouter')
const masterRouter = require('../../routes/Assets/masterAssetsRouter')
const statusRouter = require('../../routes/Assets/statusRouter')

const authRouter = require('../../routes/Auth/authenticateRouter')

const inspectRouter = require('../../routes/Inspection/inspection')
const attachRouter = require('../../routes/Inspection/attachments')

const userRouter = require('../../routes/User/userRouter')

const sysAdminRouter = require('../../routes/UserManage/userManageRouter')

const routes = [
    assetRouter,
    categoryRouter,
    masterRouter,
    statusRouter,
    authRouter,
    inspectRouter,
    attachRouter,
    userRouter,
    sysAdminRouter
]

module.exports = routes