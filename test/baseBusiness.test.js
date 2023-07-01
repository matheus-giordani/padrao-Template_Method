import {describe, it, jest, expect, beforeEach} from '@jest/globals'
import BaseBusiness from '../src/business/base/baseBusiness.js'
import { NotImplementedExepection } from '../src/utils/notImplementedExeception.js'
describe('#BaseBusiness', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should throw an error when child class doest implemented method _validateFileds', () => {
        class MockSut extends BaseBusiness {
            _create(data){
                return true
            }
        }
        const sut = new MockSut()
        expect(() => sut.create()).toThrow(new NotImplementedExepection(sut._validateFields.name))

    })
    it('should throw an error when child class doest implemented method _create', () => {
        class MockSut extends BaseBusiness {
            _validateFields(data){
                return true
            }
        }
        const sut = new MockSut()
        expect(() => sut.create()).toThrow(new NotImplementedExepection(sut._create.name))

    })

    it('should throw an error when _validateFields returns false', () => {
        const VALIDATION_DOESNT_SUCCEEDED = false
        class MockSut extends BaseBusiness {
            _validateFields = jest.fn().mockReturnValue(VALIDATION_DOESNT_SUCCEEDED)
        }
        const sut = new MockSut()
        const data = {name: "any_name"}
        expect(() => sut.create(data)).toThrow(new Error("invalid data"))

    })

    it('should call _create with correct params', () => {
        class MockSut extends BaseBusiness {
            _validateFields(data){
                return true
            }
            _create(data){
                return true
            }


        }
        const sut = new MockSut()
        const data = {name: "any_name"}
        const createSpy = jest.spyOn(sut, sut._create.name)
        sut.create(data)
        expect(createSpy).toHaveBeenCalledWith(data)
    })  

    it('should return data when _create succeeds', () => {
        const VALIDATION_DOESNT_SUCCEEDED = true
        const CREATE_SUCCEEDS = true
        class MockSut extends BaseBusiness {
            _validateFields = jest.fn().mockReturnValue(VALIDATION_DOESNT_SUCCEEDED)
            _create = jest.fn().mockReturnValue(CREATE_SUCCEEDS)
        }
        const sut = new MockSut()
        const spyCreateBaseBusiness = jest.spyOn(BaseBusiness.prototype, BaseBusiness.prototype.create.name )
        const data = {name: "any_name"}
        const result = sut.create(data)
        expect(spyCreateBaseBusiness).toBeCalled()
        expect(result).toBeTruthy()
        expect(sut._create).toBeCalledWith(data)
        expect(sut._validateFields).toBeCalledWith(data)



    })
})