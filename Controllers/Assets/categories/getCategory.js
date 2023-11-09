const {Asset_Category,Sequelize} = require('../../../models')
const getCategories = async (req, res) => {
    try {
        // const limit = 5
        const { status = false, 
                search = '',
                // page= 1, 
            } = req.query;

        //  const skip = (page - 1)  * limit

        const categories = await Asset_Category.findAll({
            attributes: ['id', 'category_name', 'category_code', 'is_deleted'],
            order: [['id', 'DESC']],
            where: {
               is_deleted : status,
               category_name: {
                [Sequelize.Op.like]: `%${search}%`
            }
            },
            // limit : limit,
            // offset : Math.abs(skip),
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
