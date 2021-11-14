"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conection = void 0;
const mongodb_1 = require("mongodb");
const dataexception_1 = require("../shared/exceptions/dataexception");
const StringConection_1 = require("./StringConection");
class Conection {
    static conection() {
        try {
            const clientcon = new mongodb_1.MongoClient(StringConection_1.default.cnn());
            return clientcon;
        }
        catch (error) {
            throw new dataexception_1.DataException("Could not connect to MongoDB: " + error.message);
        }
    }
}
exports.Conection = Conection;
//# sourceMappingURL=Conection.js.map