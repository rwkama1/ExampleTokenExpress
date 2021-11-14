"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataUser_1 = require("../data/DataUser");
const logicexception_1 = require("../shared/exceptions/logicexception");
const instance_1 = require("./instanceClass/instance");
const hashPassword_1 = require("./security/hashPassword");
const jwt_1 = require("./security/jwt");
const doesnotexists_1 = require("./verify/doesnotexists");
const exists_1 = require("./verify/exists");
class LogicUser {
    static instancia;
    constructor() { }
    static getInstance() {
        if (!LogicUser.instancia) {
            LogicUser.instancia = new LogicUser();
        }
        return LogicUser.instancia;
    }
    registerUser = async (dtuser) => {
        // let verifytokenuser=await LJwt.verifytoken(token);
        // if(verifytokenuser.typeuserr!="Administrator")
        // {
        //     throw new LogicException("Require Administrator Role");
        // }
        let logicuser = instance_1.default.instanceLUser(dtuser);
        await exists_1.default.Exist_User(logicuser.idcard);
        const passh = hashPassword_1.default.hashPassword(logicuser.password);
        logicuser.password = passh.hash;
        logicuser.hashh = passh.salt;
        let data = logicuser.getDTO();
        const reguser = await DataUser_1.default.registerUser(data);
        if (reguser === true) {
            return data;
        }
    };
    // SIGN IN
    _userlogin;
    get userlogin() {
        return this._userlogin;
    }
    set userlogin(value) {
        this._userlogin = value;
    }
    signIn = async (idcard, passwordd) => {
        let usersearch = await doesnotexists_1.default.Not_Exist_User(idcard);
        const verifyp = hashPassword_1.default.verifyPassword(passwordd, usersearch.password, usersearch.hashh);
        if (verifyp === false) {
            throw new logicexception_1.LogicException("Wrong password");
        }
        this.userlogin = usersearch;
        this.userlogin.token = jwt_1.default.createtoken();
        return this.userlogin;
    };
    logout() {
        let lguser = this.userlogin;
        if (lguser != null) {
            this.userlogin = null;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = LogicUser;
//# sourceMappingURL=LogicUser.js.map