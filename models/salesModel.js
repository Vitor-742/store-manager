const connection = require('./connection');

const showSales = async () => {
    const [result] = await connection.execute(
        `SELECT salpro.sale_id, sales.date, salpro.product_id, salpro.quantity 
        FROM StoreManager.sales_products AS salpro
        JOIN StoreManager.sales AS sales
        ON sales.id = salpro.sale_id
        ORDER BY sale_id, product_id;`,
    );
    return result;
};

const showSalesById = async (id) => {
    const [result] = await connection.execute(
        `SELECT sales.date, salpro.product_id, salpro.quantity 
        FROM StoreManager.sales_products AS salpro
        JOIN StoreManager.sales AS sales
        ON sales.id = salpro.sale_id
        WHERE sales.id = ${id};`,
    ); return result;
};

const createSale = async (sales) => {
    const [salesTable] = await connection.execute(
        'INSERT INTO StoreManager.sales (date) VALUES (?)',
        [date],
    );
    const id = salesTable.insertId;
    sales.forEach(async ({ productId, quantity }) => {
        await connection.execute(
            `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
            VALUES (?, ?, ?)`,
            [id, productId, quantity],
        );
    });
    return {
        id,
        itemsSold: sales,
    };
};

const updateSale = async (/* id, productId, quantity */) => { // product_id provavel problema
    /* const [result] = await connection.execute(
        `UPDATE StoreManager.sales_products
        SET product_id = ?, quantity = ?
        WHERE sale_id = ?`,
        [productId, quantity, id],
    );
    return result; */
};

module.exports = {
    showSales,
    showSalesById,
    createSale,
    updateSale,
};