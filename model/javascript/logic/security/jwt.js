"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const logicexception_1 = require("../../shared/exceptions/logicexception");
const LogicUser_1 = require("../LogicUser");
class LJwt {
    static createtoken = () => {
        const token = (0, crypto_1.randomBytes)(48).toString('hex');
        return token;
    };
    static verifytoken = async (ptoken) => {
        if (ptoken === "") {
            throw new logicexception_1.LogicException("No token provided");
        }
        let loginuser = LogicUser_1.default.getInstance().userlogin;
        if (loginuser.token != ptoken) {
            throw new logicexception_1.LogicException("Wrong token");
        }
        return loginuser;
        // let usersearch = await LGetUsers.searchUsertoken(ptoken);
        // if(usersearch===null)
        //   {
        //     throw new LogicException("Wrong Token");
        //   }
        // return usersearch  
    };
}
exports.default = LJwt;
//# sourceMappingURL=jwt.js.map