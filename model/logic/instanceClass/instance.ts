import DTOProduct from "../../shared/DTO/DTOProduct";
import DTOUser from "../../shared/DTO/DTOUser";
import LProduct from "../class/LProduct";
import LUser from "../class/LUser";


export default class InstanceLClass
{
    static instanceLUser=(dtouser:DTOUser)=>
    {
        let logicuser=new LUser(dtouser.idcard,dtouser.username,
            dtouser.email,dtouser.typeuserr,
            dtouser.hashh,dtouser.password,"")
            return logicuser
    }
    static instanceLProduct=(dtopro:DTOProduct)=>
    {
        let logicproduct=new LProduct(dtopro.name,
            dtopro.category,
            dtopro.price,
            dtopro.imgurl);
            return logicproduct
    }


}