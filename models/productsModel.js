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

const alreadyExistProduct = async (name) => {
    const [result] = await connection.execute(
        'SELECT * FROM StoreManager.products WHERE name = ?',
        [name],
    );
    if (result.length === 0) return false;
    return true;
};

const createProduct = async (name, quantity) => {
    const [result] = await connection.execute(
        'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)',
        [name, quantity],
    );
    return result;
};

module.exports = {
    showProducts,
    showProductsById,
    alreadyExistProduct,
    createProduct,
};