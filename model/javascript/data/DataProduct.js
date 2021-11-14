"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DTOProduct_1 = require("../shared/DTO/DTOProduct");
const dataexception_1 = require("../shared/exceptions/dataexception");
const Conection_1 = require("./Conection");
class DataProduct {
    static registerProduct = async (dtoproduct) => {
        try {
            let conection = await Conection_1.Conection.conection().connect();
            const col = conection.db("ExampleJWT").collection("Product");
            const result = await col.insertOne(dtoproduct);
            await conection.close();
            return true;
        }
        catch (e) {
            throw new dataexception_1.DataException("DataLayer Error: " + e.message);
        }
    };
    static updateProduct = async (dtoproduct) => {
        try {
            let conection = await Conection_1.Conection.conection().connect();
            const col = conection.db("ExampleJWT").collection("Product");
            let search = { name: dtoproduct.name };
            var newvalues = { $set: {
                    category: dtoproduct.category,
                    imgurl: dtoproduct.imgurl,
                    price: dtoproduct.price
                } };
            const result = await col.updateOne(search, newvalues);
            await conection.close();
            return true;
        }
        catch (e) {
            throw new dataexception_1.DataException("DataLayer Error: " + e.message);
        }
    };
    static deleteProduct = async (dtoproduct) => {
        try {
            let conection = await Conection_1.Conection.conection().connect();
            const col = conection.db("ExampleJWT").collection("Product");
            let search = { name: dtoproduct.name };
            const result = await col.deleteOne(search);
            await conection.close();
            return true;
        }
        catch (e) {
            throw new dataexception_1.DataException("DataLayer Error: " + e.message);
        }
    };
    static getProducts = async () => {
        try {
            let conection = await Conection_1.Conection.conection().connect();
            const col = conection.db("ExampleJWT").collection("Product");
            const result = await col.find({}).toArray();
            let array = [];
            for (var p of result) {
                let obj = new DTOProduct_1.default(p.name, p.category, p.price, p.imgurl);
                array.push(obj);
            }
            return array;
        }
        catch (e) {
            throw new dataexception_1.DataException("DataLayer Error: " + e.message);
        }
    };
}
exports.default = DataProduct;
//# sourceMappingURL=DataProduct.js.map