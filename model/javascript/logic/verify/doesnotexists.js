"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logicexception_1 = require("../../shared/exceptions/logicexception");
const LGetProduct_1 = require("../gets/LGetProduct");
const LGetUsers_1 = require("../gets/LGetUsers");
class Verify_not_exist {
    static Not_Exist_User = async (idcard) => {
        let usersearch = await LGetUsers_1.default.searchUser(idcard);
        if (usersearch === null) {
            throw new logicexception_1.LogicException("That User does not  exists in the system");
        }
        return usersearch;
    };
    static Not_Exist_Product = async (name) => {
        let productsearch = await LGetProduct_1.default.searchProduct(name);
        if (productsearch === null) {
            throw new logicexception_1.LogicException("That Product does not  exists in the system");
        }
        return productsearch;
    };
}
exports.default = Verify_not_exist;
//# sourceMappingURL=doesnotexists.js.map