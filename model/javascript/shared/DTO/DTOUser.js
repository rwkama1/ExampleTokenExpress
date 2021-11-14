"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DTOUser {
    idcard;
    username;
    email;
    hashh;
    password;
    typeuserr;
    constructor(pidcard, pusername, pemail, ptypeuserr, phashh, ppassword) {
        this.idcard = pidcard;
        this.username = pusername;
        this.email = pemail;
        this.typeuserr = ptypeuserr;
        this.hashh = phashh;
        this.password = ppassword;
    }
}
exports.default = DTOUser;
//# sourceMappingURL=DTOUser.js.map