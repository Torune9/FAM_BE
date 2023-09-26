const {Asset_Category,Sequelize} = require('../../../models')
const getCategories = async (req, res) => {
    try {
        const { status = false, 
                search = '' } = req.query;

        const categories = await Asset_Category.findAll({
            attributes: ['id', 'category_name', 'category_code', 'is_deleted'],
            order: [['id', 'DESC']],
            where: {
               is_deleted : status,
               category_name: {
                [Sequelize.Op.like]: `%${search}%`
            }
            }
        });

        res.json({
            code: 200,
            message: 'success',
            result: {
                content: categories
            }
        });
    } catch (error) {
        res.json({
            error: error.message // Use error.message to get the error message
        });
    }
};

module.exports = getCategories
