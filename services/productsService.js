const productModel = require('../models/productsModel');

const showProducts = async () => {
    const products = await productModel.showProducts();
    return products;
};

const showProductsById = async (id) => {
    const product = await productModel.showProductsById(id);
    return product;
};

const createProduct = async (name, quantity) => {
    const product = await productModel.createProduct(name, quantity);
    return {
        id: product.insertId,
        name,
        quantity,
    };
};

module.exports = {
    showProducts,
    showProductsById,
    createProduct,
};