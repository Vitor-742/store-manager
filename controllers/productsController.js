const productService = require('../services/productsService');
const productModel = require('../models/productsModel');

const showProducts = async (req, res) => {
    const products = await productService.showProducts();

    return res.status(200).send(products);
};

const showProductsById = async (req, res) => {
    const { id } = req.params;
    const product = await productService.showProductsById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(product);
};

const createProduct = async (req, res) => {
    const { name, quantity } = req.body;
    const alreadyExist = await productModel.alreadyExistProduct(name);
    if (alreadyExist) return res.status(409).json({ message: 'Product already exists' });
    const product = await productService.createProduct(name, quantity);
    res.status(201).json(product);
};

const upgradeProduct = async (req, res) => {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const productExist = await productModel.productExist(id);
    if (!productExist) return res.status(404).json({ message: 'Product not found' });
    const newProduct = await productService.upgradeProduct(id, name, quantity);
    res.status(200).send(newProduct);
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const productExist = await productModel.productExist(id);
    if (!productExist) return res.status(404).json({ message: 'Product not found' });
    await productService.deleteProduct(id);
    return res.status(204).send();
};

module.exports = {
    showProducts,
    showProductsById,
    createProduct,
    upgradeProduct,
    deleteProduct,
};