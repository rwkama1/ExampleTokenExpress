import DataUser from "../data/DataUser";
import DTOUser from "../shared/DTO/DTOUser";
import { LogicException } from "../shared/exceptions/logicexception";
import LUser from "./class/LUser";
import LGetUsers from "./gets/LGetUsers";
import InstanceLClass from "./instanceClass/instance";
import HashPassword from "./security/hashPassword";
import LJwt from "./security/jwt";
import Verify_not_exist from "./verify/doesnotexists";
import Verify_exist from "./verify/exists";

export default  class LogicUser
{
    private static instancia: LogicUser;
    private constructor() { }
    public static getInstance(): LogicUser {
        if (!LogicUser.instancia) {
            LogicUser.instancia = new LogicUser();
        }

        return LogicUser.instancia;
    }
     registerUser=async(dtuser:DTOUser)=>
    {
        // let verifytokenuser=await LJwt.verifytoken(token);
        // if(verifytokenuser.typeuserr!="Administrator")
        // {
        //     throw new LogicException("Require Administrator Role");
            
        // }
        let logicuser=InstanceLClass.instanceLUser(dtuser);
         await Verify_exist.Exist_User(logicuser.idcard);
        const passh= HashPassword.hashPassword(logicuser.password);
        logicuser.password=passh.hash;
        logicuser.hashh=passh.salt;
        let data=logicuser.getDTO();
        const reguser=await DataUser.registerUser(data);
      if(reguser===true)
      {
        
        return data
      }
    }
      // SIGN IN

      private _userlogin: LUser;
      public get userlogin(): LUser {
          return this._userlogin;
      }
      public set userlogin(value: LUser) {
          this._userlogin = value;
      }

      signIn=async(idcard:string,passwordd:string)=>
      {
        let usersearch = await Verify_not_exist.Not_Exist_User(idcard);
       
        const verifyp= HashPassword.verifyPassword(passwordd,usersearch.password,usersearch.hashh);
   
        if(verifyp===false)
        {
            throw new LogicException("Wrong password");
        }
         this.userlogin=usersearch;
         this.userlogin.token=LJwt.createtoken();
      
        return  this.userlogin;
      }
      logout()
      {
          let lguser=this.userlogin;
          if(lguser!=null)
          {
              this.userlogin=null;
              return true;
              
          }
          else
          {
              return false;
          }
      }

    
}