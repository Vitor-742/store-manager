const {expect} = require('chai')
const sinon = require('sinon')
const productModel = require('../../../models/productsModel')
const connection = require('../../../models/connection')

describe('Testa o ProductModels', () => {
    


describe('mostra todos os produtos', () => {
    before(async () => {
        const execute = [{
            id: 1,
            name: "produto A",
            quantity: 10
          }];

        sinon.stub(connection, "execute").resolves(execute);
        });

    after(async () => {
        connection.execute.restore();
    });

        it('retorna um objeto', async () => {
            const response = await productModel.showProducts()

            expect(response).to.be.a('object')
        })

        it('retorna um objeto com as chaves corretas', async() => {
            const response = await productModel.showProducts()

            expect(response).to.have.property('id')
            expect(response).to.have.property('name')
            expect(response).to.have.property('quantity')
        })

})


    describe('Busca produto por id', async() => {
        const EXECUTEID = 1
        before(async () => {
            const execute = [[{
                id: 1,
                name: "produto A",
                quantity: 10
              }]];
    
            sinon.stub(connection, "execute").resolves(execute);
            });
    
        after(async () => {
            connection.execute.restore();
        });

        it('retorna um objeto', async() => {
            const response = await productModel.showProductsById(EXECUTEID)

            expect(response).to.be.a('object')
        })

        it('retorna um objeto com id correto', async() => {
            const response = await productModel.showProductsById(EXECUTEID)

            expect(response).to.have.property('id').with.equal(1)
        })
    })

    describe('adiciona novo produto', async() => {
        const name = 'produto A'
        const quantity = 10
        before(async () => {
            const execute = [{ insertId: 1 }];
    
            sinon.stub(connection, "execute").resolves(execute);
            });
    
        after(async () => {
            connection.execute.restore();
        });

        it('testa se o que é retornado é um objeto', async() => {
            const response = await productModel.createProduct(name, quantity)

            expect(response).to.be.a('object')
        })

        it('testa se o id é retornado pela funcao', async() => {
            const response = await productModel.createProduct(name, quantity)

            expect(response).to.have.property('insertId')
        })
    })
})