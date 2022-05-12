const productService = require('../services/productsService');
const productModel = require('../models/productsModel');

const showProducts = async (req, res) => {
    const products = await productService.showProducts();

    res.status(200).json(products);
};

const showProductsById = async (req, res) => {
    const { id } = req.params;
    const product = await productService.showProductsById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
};

const createProduct = async (req, res) => {
    const { name, quantity } = req.body;
    const alreadyExist = await productModel.alreadyExistProduct(name);
    if (alreadyExist) return res.status(409).json({ message: 'Product already exists' });
    const product = await productService.createProduct(name, quantity);
    res.status(201).json(product);
};

module.exports = {
    showProducts,
    showProductsById,
    createProduct,
};