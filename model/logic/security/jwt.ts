import { pbkdf2Sync, randomBytes } from "crypto";
import { LogicException } from "../../shared/exceptions/logicexception";

import LGetUsers from "../gets/LGetUsers";
import LogicUser from "../LogicUser";
export default class LJwt
{
    static createtoken=()=>
    {
        const token = randomBytes(48).toString('hex');
        return token
    }
    static verifytoken=async(ptoken:string)=>
    {
        if(ptoken==="")
        {
            throw new LogicException("No token provided");
            
        }
        let loginuser=LogicUser.getInstance().userlogin;
        if(loginuser.token!=ptoken)
        {
            throw new LogicException("Wrong token");
            
        }
        return loginuser
        // let usersearch = await LGetUsers.searchUsertoken(ptoken);
        // if(usersearch===null)
        //   {
        //     throw new LogicException("Wrong Token");
        //   }
        // return usersearch  
    }
  
}