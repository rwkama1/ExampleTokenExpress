import LProduct from "../class/LProduct";
import LUser from "../class/LUser";

export class InstanceArrayDTO
{
  
    static instanceArrayUser=(larrayuser:LUser[])=>
    {
        let arraydto=[];
        for(let user of larrayuser)
        {
            let dtouser=user.getDTO();
            arraydto.push(dtouser);

        }
        return arraydto;       
    }
    static instanceArrayproducto=(larrayp:LProduct[])=>
    {
        let arraydto=[];
        for(let producto of larrayp)
        {
            let dtop=producto.getDTO();
            arraydto.push(dtop);

        }
        return arraydto;       
    }
}
