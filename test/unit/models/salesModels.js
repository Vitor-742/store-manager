const {expect} = require('chai')
const sinon = require('sinon')

const salesModel = require('../../../models/salesModel')
const connection = require('../../../models/connection')

describe('Testa o salesModel', () => {
    describe('Testa o showSales', () => {
        before(async () => {
            const execute = [[
                {
                    "sale_id": 1,
                    "date": "2022-05-19T00:00:23.000Z",
                    "product_id": 1,
                    "quantity": 5
                },
                {
                    "sale_id": 1,
                    "date": "2022-05-19T00:00:23.000Z",
                    "product_id": 2,
                    "quantity": 10
                }
            ], 0];
    
            sinon.stub(connection, "execute").resolves(execute);
            });
    
        after(async () => {
            connection.execute.restore();
        });

        it('retorna um array de objetos', async () => {
            const response = await salesModel.showSales();

            expect(response).to.be.a('array')// testar
            expect(response[0]).to.be.a('object')
        })
        it('os objetos tem as chaves corretas', async () => {
            const response = await salesModel.showSales();

            expect(response[0]).to.have.property('sale_id')
            expect(response[0]).to.have.property('date')
            expect(response[0]).to.have.property('product_id')
            expect(response[0]).to.have.property('quantity')
        })
    })
})