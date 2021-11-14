import { LogicException } from "../../shared/exceptions/logicexception";
import LGetProducts from "../gets/LGetProduct";
import LGetUsers from "../gets/LGetUsers";

export default class Verify_not_exist
{
    static Not_Exist_User=async(idcard:string)=>
    {
        let usersearch = await LGetUsers.searchUser(idcard);
        if(usersearch===null)
        {
            throw new LogicException("That User does not  exists in the system");

        }
        return usersearch
    }
    static Not_Exist_Product=async(name:string)=>
    {
        let productsearch = await LGetProducts.searchProduct(name);
        if(productsearch===null)
        {
            throw new LogicException("That Product does not  exists in the system");

        }
        return productsearch
    }
}