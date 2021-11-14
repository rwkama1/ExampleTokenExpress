"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DTOUser_1 = require("../shared/DTO/DTOUser");
const dataexception_1 = require("../shared/exceptions/dataexception");
const Conection_1 = require("./Conection");
class DataUser {
    static registerUser = async (dtouser) => {
        try {
            let conection = await Conection_1.Conection.conection().connect();
            const col = conection.db("ExampleJWT").collection("User");
            const result = await col.insertOne(dtouser);
            await conection.close();
            return true;
        }
        catch (e) {
            throw new dataexception_1.DataException("DataLayer Error: " + e.message);
        }
    };
    static getUsers = async () => {
        try {
            let conection = await Conection_1.Conection.conection().connect();
            const col = conection.db("ExampleJWT").collection("User");
            const result = await col.find({}).toArray();
            let array = [];
            for (var p of result) {
                let obj = new DTOUser_1.default(p.idcard, p.username, p.email, p.typeuserr, p.hashh, p.password);
                array.push(obj);
            }
            return array;
        }
        catch (e) {
            throw new dataexception_1.DataException("DataLayer Error: " + e.message);
        }
    };
}
exports.default = DataUser;
//# sourceMappingURL=DataUser.js.map