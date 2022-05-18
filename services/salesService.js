const salesModel = require('../models/salesModel');

const showSales = async () => {
    const sales = await salesModel.showSales();
    const newSales = sales.map((sale) => ({
            saleId: sale.sale_id,
            date: sale.date,
            productId: sale.product_id,
            quantity: sale.quantity,
        }));
    return newSales;
};

const showSalesById = async (id) => {
    const sales = await salesModel.showSalesById(id);
    const newSales = sales.map((sale) => ({
        date: sale.date,
        productId: sale.product_id,
        quantity: sale.quantity,
    }));
    return newSales;
};

const createSale = async (sale) => {
    const itemSale = await salesModel.createSale(sale);
    return itemSale;
};

const updateSale = async (id, productId, quantity) => {
    const saleUpdated = await salesModel.updateSale(id, quantity, quantity);
    return saleUpdated;
};

module.exports = {
    showSales,
    showSalesById,
    createSale,
    updateSale,
};