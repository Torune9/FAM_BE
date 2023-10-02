const {Asset,Sequelize} = require('../../../models')

const UpdateAsset = async (req, res) => {
    try {
        const { id } = req.params;
        const { status,quantity } = req.body;
        const assets = await Asset.findOne({
            where: {
                id: id
            }
        });

        if (!assets) {
            return res.status(404).json({
                message: 'Asset Not Found!'
            });
        }
        
        if (!status && !quantity) {
            return res.json({
                message : 'Asset failed to update'
            })
        }
        assets.quantity = quantity !== undefined ? quantity : assets.quantity
        assets.status = status !== undefined ? status :assets.status;
        await assets.save();

        return res.json({
            message: 'Asset has been updated.'
        });
    } catch (error) {
        console.log(error);
       res.send(error)
    }
};

module.exports = UpdateAsset