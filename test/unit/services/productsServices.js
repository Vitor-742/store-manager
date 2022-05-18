const {expect} = require('chai')
const sinon = require('sinon')

const productsService = require('../../../services/productsService')
const productModel = require('../../../models/productsModel');

describe('Testa o productService', () => {
    describe('caso os dados nao sejam passados corretamente', () => {
        it('caso nao seja passado o id para ShowProductsById', async () => {
            const response = await productsService.showProductsById();

            expect(response).to.be.a('boolean')
            expect(response).to.be.equal(false)
        })
        it('caso nao seja passado name ou quantity para createProduct', async () => {
            const response = await productsService.createProduct();

            expect(response).to.be.a('boolean')
            expect(response).to.be.equal(false)
        })
        it('caso nao seja passado id, name ou quantity para upgradeProduct', async () => {
            const response = await productsService.upgradeProduct();

            expect(response).to.be.a('boolean')
            expect(response).to.be.equal(false)
        })
    })
    describe('caso a requisicao seja feita corretamente', () => {
        describe('para createProduct', () => {
            const payloadProduct = {
            insertId: 1
          };
      
          before(() => {
            sinon.stub(productModel, "createProduct").resolves(payloadProduct);
          });
      
          after(() => {
            productModel.createProduct.restore();
          });

        it('caso a requisicao seja feita corretamente para createProduct', async () => {
            const response = await productsService.createProduct('produto A', 10);

            expect(response).to.be.a('object')
            expect(response).to.have.property('id')
            expect(response).to.have.property('name')
            expect(response).to.have.property('quantity')
        })
        })
        describe('para upgradeProduct', () => {
            const payloadProduct = {};
          
              before(() => {
                sinon.stub(productModel, "upgradeProduct").resolves(payloadProduct);
              });
          
              after(() => {
                productModel.upgradeProduct.restore();
              });
    
            it('caso a requisicao seja feita corretamente para upgradeProduct', async () => {
                const response = await productsService.upgradeProduct(1, 'produto A', 10);
    
                expect(response).to.be.a('object')
                expect(response).to.have.property('id')
                expect(response).to.have.property('name')
                expect(response).to.have.property('quantity')
            })
        })
        
    })
})