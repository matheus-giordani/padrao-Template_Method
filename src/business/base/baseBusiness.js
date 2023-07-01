import { NotImplementedExepection } from "../../utils/notImplementedExeception.js";

export default class BaseBusiness {
    _validateFields(data){
        throw new NotImplementedExepection(this._validateFields.name)
    }
    _create(data){
        throw new NotImplementedExepection(this._create.name)
    }
    create(data){
        //valida campos
        const isValid = this._validateFields(data)
        if(!isValid) throw new Error("invalid data")
        return this._create(data)
    }


}