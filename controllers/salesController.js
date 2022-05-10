const salesService = require('../services/salesService');

const showSales = async (req, res) => {
    const sales = await salesService.showSales();
    res.status(200).json(sales);
};

const showSalesById = async (req, res) => {
    const { id } = req.params;
    const sales = await salesService.showSalesById(id);
    if (sales.length === 0) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(sales);
};

module.exports = {
    showSales,
    showSalesById,
};