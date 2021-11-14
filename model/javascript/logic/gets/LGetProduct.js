"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataProduct_1 = require("../../data/DataProduct");
const instance_1 = require("../instanceClass/instance");
class LGetProducts {
    static getLProductos = async () => {
        let arrayp = [];
        let datap = await DataProduct_1.default.getProducts();
        for (var dtpp of datap) {
            const logicp = instance_1.default.instanceLProduct(dtpp);
            arrayp.push(logicp);
        }
        return arrayp;
    };
    static searchProduct = async (name) => {
        let datap = await this.getLProductos();
        for (let producto of datap) {
            if (name === producto.name) {
                return producto;
            }
        }
        return null;
    };
}
exports.default = LGetProducts;
//# sourceMappingURL=LGetProduct.js.map