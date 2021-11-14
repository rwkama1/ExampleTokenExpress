import DataUser from "../../data/DataUser";
import LUser from "../class/LUser";
import InstanceLClass from "../instanceClass/instance";

export default class LGetUsers
{
    static getLUsers=async()=>
    {
      let arrayluser:LUser[]=[];
        let datausers= await DataUser.getUsers();
        for(var dtouser of datausers)
        {
        const logicuser=InstanceLClass.instanceLUser(dtouser);
        arrayluser.push(logicuser);
        }
    
      return arrayluser; 
    }
      
    static searchUser=async(idcard:string)=>
    {
      let datausers= await this.getLUsers();
     for(let user of datausers)
      {
        if(idcard===user.idcard)
        {
          return user;
        }
      }
      return null;
    }
    static searchUsertoken=async(token:string)=>
    {
      let datausers= await this.getLUsers();
     for(let user of datausers)
      {
        if(token===user.token)
        {
          return user;
        }
      }
      return null;
    }
}