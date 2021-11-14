"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataProduct_1 = require("../data/DataProduct");
const logicexception_1 = require("../shared/exceptions/logicexception");
const LGetProduct_1 = require("./gets/LGetProduct");
const instance_1 = require("./instanceClass/instance");
const instanceArrayDto_1 = require("./instanceClass/instanceArrayDto");
const jwt_1 = require("./security/jwt");
class LogicProduct {
    static instancia;
    constructor() { }
    static getInstance() {
        if (!LogicProduct.instancia) {
            LogicProduct.instancia = new LogicProduct();
        }
        return LogicProduct.instancia;
    }
    registerProduct = async (dtp, token) => {
        let productserach = await LGetProduct_1.default.searchProduct(dtp.name);
        if (productserach != null) {
            throw new logicexception_1.LogicException("That Product does not exists in the system");
        }
        let verifyusertoken = await jwt_1.default.verifytoken(token);
        if (verifyusertoken.typeuserr != "Moderador") {
            throw new logicexception_1.LogicException("Require Morderador Role");
        }
        let logicp = instance_1.default.instanceLProduct(dtp);
        let data = logicp.getDTO();
        let addp = DataProduct_1.default.registerProduct(data);
        return addp;
    };
    updateProduct = async (dtp, token) => {
        let verifytokenuser = await jwt_1.default.verifytoken(token);
        if (verifytokenuser.typeuserr != "Moderador") {
            throw new logicexception_1.LogicException("Require Morderador Role");
        }
        let logicp = instance_1.default.instanceLProduct(dtp);
        let data = logicp.getDTO();
        let addp = DataProduct_1.default.updateProduct(data);
        return addp;
    };
    deleteProduct = async (dtp, token) => {
        let verifytokenuser = await jwt_1.default.verifytoken(token);
        if (verifytokenuser.typeuserr != "Moderador") {
            throw new logicexception_1.LogicException("Require Morderador Role");
        }
        let logicp = instance_1.default.instanceLProduct(dtp);
        let data = logicp.getDTO();
        let addp = DataProduct_1.default.deleteProduct(data);
        return addp;
    };
    //*********************************************************** */
    getLProductos = async (token) => {
        let verifytokenuser = await jwt_1.default.verifytoken(token);
        if (verifytokenuser.typeuserr != "Moderador") {
            throw new logicexception_1.LogicException("Require Morderador Role");
        }
        let getp = await LGetProduct_1.default.getLProductos();
        let arraydtop = instanceArrayDto_1.InstanceArrayDTO.instanceArrayproducto(getp);
        return arraydtop;
    };
    searchProduct = async (name, token) => {
        let verifytokenuser = await jwt_1.default.verifytoken(token);
        if (verifytokenuser.typeuserr != "Moderador") {
            throw new logicexception_1.LogicException("Require Morderador Role");
        }
        let getp = await LGetProduct_1.default.searchProduct(name);
        return getp.getDTO();
    };
}
exports.default = LogicProduct;
//# sourceMappingURL=LogicProduct.js.map