const { Product } = require('../models');

createProduct = async (req, res) => {
    try {
        let { name, description, price, image, userId, categoryId } = req.body;
        let newProduct = await Product.create({
            name, 
            description, 
            price, 
            image,
            userId, 
            categoryId
        });

        res.status(201).json({
            status: 'success',
            message: 'succesfully create data',
            data: newProduct
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
};

getProducts = async (req, res) => {
    try {
        let product = await Article.findAll();

        res.status(200).json({
            status: 'success',
            message: 'succesfully get all data',
            data: product
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
};

getProduct = async (req, res) => {
    try {
        const product_id = req.params.id;

        let product = await Product.findOne({
            where: {
                id: product_id
            }
        });

        if (!product) {
            res.status(404).json({
                status: 'error',
                message: 'cant find product with id ' + product_id,
                data: null
            });
            return;
        }

        res.status(200).json({
            status: 'success',
            message: 'succesfully get detail data',
            data: product
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
};

updateProduct = async (req, res) => {
    try {
        const product_id = req.params.id;
        const { name, description, price, image, userId, categoryId } = req.body;

        let query = {
            where: {
                id: product_id
            }
        };

        let updated = await Product.update({
            name, 
            description, 
            price, 
            image, 
            userId, 
            categoryId
        }, query);

        res.status(200).json({
            status: 'success',
            message: 'succesfully update data',
            data: updated
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
};

deleteProduct = async (req, res) => {
    try {
        const product_id = req.params.id;

        let deleted = await Product.destroy({
            where: {
                id: product_id
            }
        });

        res.status(200).json({
            status: 'success',
            message: 'succesfully delete data',
            data: deleted
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};