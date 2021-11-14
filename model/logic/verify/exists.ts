import { LogicException } from "../../shared/exceptions/logicexception";
import LGetProducts from "../gets/LGetProduct";
import LGetUsers from "../gets/LGetUsers";

export default class Verify_exist
{
    static Exist_User=async(idcard:string)=>
    {
        let usersearch = await LGetUsers.searchUser(idcard);
        if(usersearch!=null)
        {
            throw new LogicException("That User already exists in the system");

        }
       
    }
    static Exist_Product=async(name:string)=>
    {
        let productsearch = await LGetProducts.searchProduct(name);
        if(productsearch!=null)
        {
            throw new LogicException("That Product already exists in the system");

        }
       
    }
}
