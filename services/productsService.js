const productModel = require('../models/productsModel');

const showProducts = async () => {
    const products = await productModel.showProducts();
    return products;
};

const showProductsById = async (id) => {
    const product = await productModel.showProductsById(id);
    return product;
};

module.exports = {
    showProducts,
    showProductsById,
};