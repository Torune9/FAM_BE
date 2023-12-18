const {User} = require ('../../../models')

const deactivateAccount = async(req,res)=>{
    try {
        const {id,value} = req.params
        const users = await User.findOne({
            where : {
                id : id
            }
        })
        if (users) {
            users.active = value
            await users.save()
            return res.json({
                message : 'Ok'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error : error
        })
    }
}

module.exports = deactivateAccount