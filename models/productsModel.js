const connection = require('./connection');

const showProducts = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM StoreManager.products ORDER BY id;',
    );
    return result;
};

const showProductsById = async (id) => {
    const [[result]] = await connection.execute(
        `SELECT * FROM StoreManager.products WHERE id = ${id}`,
    );
    
    return result;
};

module.exports = {
    showProducts,
    showProductsById,
};