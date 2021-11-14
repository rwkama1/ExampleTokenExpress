import DTOUser from "../shared/DTO/DTOUser";
import { DataException } from "../shared/exceptions/dataexception";
import { Conection } from "./Conection";


export default class DataUser
{
   static registerUser=async(dtouser:DTOUser)=>
    {
      try {
        let conection = await Conection.conection().connect();
        const col = conection.db("ExampleJWT").collection("User");
        const result = await col.insertOne(dtouser);
        await conection.close();
        return true;
 
      }
      catch(e)
      {
          throw new DataException("DataLayer Error: "+e.message)
      }
  
    }
   
   
    static getUsers=async()=>
    {
      try {
        let conection = await Conection.conection().connect();
        const col = conection.db("ExampleJWT").collection("User");
        const result = await col.find({}).toArray();
        let array : DTOUser[]=[];
        for (var p of result)
        {
            let obj = new DTOUser(p.idcard,p.username,p.email,p.typeuserr,
                p.hashh,p.password);
            array.push(obj);
        }
     
        return array;
         
      }
      catch(e)
      {
          throw new DataException("DataLayer Error: "+e.message)
      }
    }
}