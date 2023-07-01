import { describe, it, jest, expect, beforeEach } from '@jest/globals'
import Order from '../src/entities/order.js'
import OrderBusiness from '../src/business/orderBusiness.js'

describe('Test suite for Template Method design pattern', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    describe('#OrderBusiness', () => {
        it('execution Order Business without Template Method', () => {
            const order = new Order({ 
                customerId: 1, 
                amount: 100, 
                products: [{ description: 'test' }] 
            });
            const orderBusiness = new OrderBusiness()
            // todos devem obrigatóriamente lembrar de seguir esse fluxo de execução
            const isValid = orderBusiness._validateFields(order)
            expect(isValid).toBeTruthy()
            const result = orderBusiness._create(order)
            expect(result).toBeTruthy()

        })
        it('execution Order Business with Template Method', () => {
            const order = new Order({ 
                customerId: 1, 
                amount: 100, 
                products: [{ description: 'test' }] 
            });
            const orderBusiness = new OrderBusiness()
            const spyValidateFields = jest.spyOn(orderBusiness, orderBusiness._validateFields.name)
            const spyCreate = jest.spyOn(orderBusiness, orderBusiness._create.name)
            const result = orderBusiness.create(order)
            expect(result).toBeTruthy()
            expect(spyValidateFields).toHaveBeenCalled()
            expect(spyCreate).toHaveBeenCalled()


         })
    })
})