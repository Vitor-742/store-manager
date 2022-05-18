const productModel = require('../models/productsModel');

const showProducts = async () => {
    const products = await productModel.showProducts();
    return products;
};

const showProductsById = async (id) => {
    if (!id) return false;
    const product = await productModel.showProductsById(id);
    return product;
};

const createProduct = async (name, quantity) => {
    if (!name || !quantity) return false;
    const product = await productModel.createProduct(name, quantity);
    return {
        id: product.insertId,
        name,
        quantity,
    };
};

const upgradeProduct = async (id, name, quantity) => {
    if (!id || !name || !quantity) return false;
    await productModel.upgradeProduct(id, name, quantity);
    return {
        id,
        name,
        quantity,
    };
};

const deleteProduct = async (id) => {
    await productModel.deleteProduct(id);
};

module.exports = {
    showProducts,
    showProductsById,
    createProduct,
    upgradeProduct,
    deleteProduct,
};