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

const upgradeProduct = async (id, name, quantity) => {
    await productModel.upgradeProduct(id, name, quantity);
    return {
        id,
        name,
        quantity,
    };
};

module.exports = {
    showProducts,
    showProductsById,
    createProduct,
    upgradeProduct,
};