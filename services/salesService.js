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

module.exports = {
    showSales,
    showSalesById,
};