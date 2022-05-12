const express = require('express');
const bodyParser = require('body-parser');
const product = require('./controllers/productsController');
const sales = require('./controllers/salesController');
const { validateProducts } = require('./middlewares/validateProduct');
const { validateSales } = require('./middlewares/validateSales');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', product.showProducts);

app.get('/products/:id', product.showProductsById);

app.get('/sales', sales.showSales);

app.get('/sales/:id', sales.showSalesById);

app.post('/products', validateProducts, product.createProduct);

app.post('/sales', validateSales);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
