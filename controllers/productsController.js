const productService = require('../services/productsService');

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

module.exports = {
    showProducts,
    showProductsById,
};