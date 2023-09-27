const {Asset_Category,MD_Asset, Sequelize} = require('../../../models')

const UpdateMdAsset = async (req, res) => {
    try {
        const { status,name, code } = req.body;
        const { id } = req.params;
        const master = await MD_Asset.findOne({
            where: {
                id: id
            }
        });

        if (!master) {
            return res.status(404).json({
                message: 'Asset Not Found!'
            });
        }

        const categories = await Asset_Category.findAll({
            attributes: ['category_code', 'category_name']
        });

        if (!name || !status || !code) {
            return res.status(406).json({
                message : 'All fields are requred'
            })
        }
        if (name) {
            const nameAsset = await MD_Asset.findOne({
                where: {
                    name: name.replace(/^\w/, (c) => c.toUpperCase()),
                    id: {
                        [Sequelize.Op.ne]: id
                    }
                }
            });

            if (nameAsset) {
                return res.status(409).json({
                    message: `${name} already exists.`
                });
            } else {
                master.name = name.replace(/^\w/, (c) => c.toUpperCase());
            }
        }


        if (code) {
            const category = categories.find(category => category.category_code == code);
            if (category) {
                master.category_code = code;
            } else {
                return res.status(404).json({
                    message: 'Failed Update,Category not found!'
                });
            }
        }

        master.status = status !== undefined ? status : master.status;
        await master.save();

        return res.json({
            message: 'Asset has been updated.'
        });
    } catch (error) {
        res.json({
            error: error.message
        });
    }
};

module.exports = UpdateMdAsset