"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataUser_1 = require("../../data/DataUser");
const instance_1 = require("../instanceClass/instance");
class LGetUsers {
    static getLUsers = async () => {
        let arrayluser = [];
        let datausers = await DataUser_1.default.getUsers();
        for (var dtouser of datausers) {
            const logicuser = instance_1.default.instanceLUser(dtouser);
            arrayluser.push(logicuser);
        }
        return arrayluser;
    };
    static searchUser = async (idcard) => {
        let datausers = await this.getLUsers();
        for (let user of datausers) {
            if (idcard === user.idcard) {
                return user;
            }
        }
        return null;
    };
    static searchUsertoken = async (token) => {
        let datausers = await this.getLUsers();
        for (let user of datausers) {
            if (token === user.token) {
                return user;
            }
        }
        return null;
    };
}
exports.default = LGetUsers;
//# sourceMappingURL=LGetUsers.js.map