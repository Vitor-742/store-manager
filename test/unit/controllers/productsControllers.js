const { expect } = require('chai');
const { mock } = require('sinon');
const sinon = require('sinon')

const productsController = require('../../../controllers/productsController')
const productService = require('../../../services/productsService')

describe('Testa o productsController', () => {
    describe('Testa o showProducts', () => {
        const response = {}
        const request = {}

        before(() => { 
            response.status = sinon.stub().returns(response);
            response.send = sinon.stub().returns();
    
            sinon.stub(productService, "showProducts").resolves(true);
        });

        after(() => {
            productService.showProducts.restore();
        });

        it('quando a requisicao e feita para showProducts', async() => {
            await productsController.showProducts(request, response);

            expect(response.status.calledWith(200)).to.be.equal(true)
        })
    })
    describe('Testa o deleteProduct', () => {
        const response = {}
        const request = {}

        request.params = { id: 1 }

        before(() => { 
            response.status = sinon.stub().returns(response);
            response.send = sinon.stub().returns();
    
            sinon.stub(productService, "deleteProduct").resolves(true);
        });

        after(() => {
            productService.deleteProduct.restore();
        });

        it('quando a requisicao e feita para deleteProduct', async() => {
            await productsController.deleteProduct(request, response);
            expect(response.status.calledWith(204)).to.be.equal(true)
            expect(response.send()).to.be.equal(undefined)
        })
    })
    describe('Testa o upgradeProduct', () => {
        const response = {}
        const request = {}

        const mockUpgrade = {
            id: 1,
            name: 'produto A',
            quantity: 10,
        }

        request.params = { id: 1 }
        request.body = {
            name: 'produto A',
            quantity: 10
        }

        before(() => { 
            response.status = sinon.stub().returns(response);
            response.send = sinon.stub().returns();
    
            sinon.stub(productService, "upgradeProduct").resolves(mockUpgrade);
        });

        after(() => {
            productService.upgradeProduct.restore();
        });

        it('quando a requisicao e feita para upgradeProduct', async() => {
            await productsController.upgradeProduct(request, response);

            expect(response.status.calledWith(200)).to.be.equal(true)
            expect(response.send.calledWith(mockUpgrade))
        })
    })
})