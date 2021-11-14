"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DTOUser_1 = require("../../shared/DTO/DTOUser");
const logicexception_1 = require("../../shared/exceptions/logicexception");
class LUser {
    //************************* */
    _idcard;
    get idcard() {
        return this._idcard;
    }
    set idcard(value) {
        var numbers = /^[0-9]+$/;
        if (!value.trim().match(numbers)) {
            throw new logicexception_1.LogicException("The identity card must have only numbers");
        }
        if (value.trim() === "") {
            throw new logicexception_1.LogicException("The identity card cannot be empty");
        }
        this._idcard = value;
    }
    //****************************** */
    _username;
    get username() {
        return this._username;
    }
    set username(value) {
        if (value.trim() === "") {
            throw new logicexception_1.LogicException("The username cannot be empty");
        }
        this._username = value;
    }
    //****************************** */
    _email;
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    //****************************** */
    _hashh;
    get hashh() {
        return this._hashh;
    }
    set hashh(value) {
        this._hashh = value;
    }
    //****************************** */
    _password;
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    //****************************** */
    _typeuserr;
    get typeuserr() {
        return this._typeuserr;
    }
    set typeuserr(value) {
        if (value.trim() != "Administrator" && value.trim() != "Moderador") {
            throw new logicexception_1.LogicException("The user can only be of the type Administrator or Moderador");
        }
        this._typeuserr = value;
    }
    //********************************* */
    _token;
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    //********************************** */
    getDTO = () => {
        let dtouser = new DTOUser_1.default(this.idcard, this.username, this.email, this.typeuserr, this.hashh, this.password);
        return dtouser;
    };
    constructor(pidcard, pusername, pemail, ptypeuserr, phashh, ppassword, ptoken) {
        this.idcard = pidcard;
        this.username = pusername;
        this.email = pemail;
        this.typeuserr = ptypeuserr;
        this.hashh = phashh;
        this.password = ppassword;
        this.token = ptoken;
    }
}
exports.default = LUser;
//# sourceMappingURL=LUser.js.map