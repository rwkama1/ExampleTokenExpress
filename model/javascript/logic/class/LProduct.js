"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DTOProduct_1 = require("../../shared/DTO/DTOProduct");
class LProduct {
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    _category;
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
    _price;
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    _imgurl;
    get imgurl() {
        return this._imgurl;
    }
    set imgurl(value) {
        this._imgurl = value;
    }
    //********************************** */
    getDTO = () => {
        let dtop = new DTOProduct_1.default(this.name, this.category, this.price, this.imgurl);
        return dtop;
    };
    constructor(pname, pcategory, pprice, pimgurl) {
        this.name = pname;
        this.category = pcategory;
        this.price = pprice;
        this.imgurl = pimgurl;
    }
}
exports.default = LProduct;
//# sourceMappingURL=LProduct.js.map