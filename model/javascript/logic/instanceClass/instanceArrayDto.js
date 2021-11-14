"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceArrayDTO = void 0;
class InstanceArrayDTO {
    static instanceArrayUser = (larrayuser) => {
        let arraydto = [];
        for (let user of larrayuser) {
            let dtouser = user.getDTO();
            arraydto.push(dtouser);
        }
        return arraydto;
    };
    static instanceArrayproducto = (larrayp) => {
        let arraydto = [];
        for (let producto of larrayp) {
            let dtop = producto.getDTO();
            arraydto.push(dtop);
        }
        return arraydto;
    };
}
exports.InstanceArrayDTO = InstanceArrayDTO;
//# sourceMappingURL=instanceArrayDto.js.map