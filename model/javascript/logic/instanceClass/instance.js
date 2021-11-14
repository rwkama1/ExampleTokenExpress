"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LProduct_1 = require("../class/LProduct");
const LUser_1 = require("../class/LUser");
class InstanceLClass {
    static instanceLUser = (dtouser) => {
        let logicuser = new LUser_1.default(dtouser.idcard, dtouser.username, dtouser.email, dtouser.typeuserr, dtouser.hashh, dtouser.password, "");
        return logicuser;
    };
    static instanceLProduct = (dtopro) => {
        let logicproduct = new LProduct_1.default(dtopro.name, dtopro.category, dtopro.price, dtopro.imgurl);
        return logicproduct;
    };
}
exports.default = InstanceLClass;
//# sourceMappingURL=instance.js.map