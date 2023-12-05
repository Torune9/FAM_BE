const router = require('../../routes/index')
const routerAsset = require('../../routes/asset')
const sysAdminRoute = require('../../routes/userManage')

const routes = [
    router,
    routerAsset,
    sysAdminRoute
]

module.exports = routes