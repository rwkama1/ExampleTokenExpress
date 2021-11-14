import DTOProduct from "../shared/DTO/DTOProduct";
import { DataException } from "../shared/exceptions/dataexception";
import { Conection } from "./Conection";

export default class DataProduct
{
   static registerProduct=async(dtoproduct:DTOProduct)=>
    {
      try {
        let conection = await Conection.conection().connect();
        const col = conection.db("ExampleJWT").collection("Product");
      
        const result = await col.insertOne(dtoproduct);
        await conection.close();
        return true;
 
      }
      catch(e)
      {
          throw new DataException("DataLayer Error: "+e.message)
      }
  
    }
    static updateProduct=async(dtoproduct:DTOProduct)=>
    {

      try {
        let conection = await Conection.conection().connect();
        const col = conection.db("ExampleJWT").collection("Product");
        let search = {name: dtoproduct.name};
        var newvalues = { $set: {
            category: dtoproduct.category,
            imgurl: dtoproduct.imgurl,
            price: dtoproduct.price
          

         } };
        const result = await col.updateOne(search, newvalues);
        await conection.close();
        return true;  
      }
      catch(e)
      {
          throw new DataException("DataLayer Error: "+e.message)
      }
  
    }
    static deleteProduct=async(dtoproduct:DTOProduct)=>
    {

      try {
        let conection = await Conection.conection().connect();
        const col = conection.db("ExampleJWT").collection("Product");
        let search = {name: dtoproduct.name};
        const result = await col.deleteOne(search);
        await conection.close();
        return true;  
      }
      catch(e)
      {
          throw new DataException("DataLayer Error: "+e.message)
      }
  
    }
    static getProducts=async()=>
    {
      try {
        let conection = await Conection.conection().connect();
        const col = conection.db("ExampleJWT").collection("Product");
        const result = await col.find({}).toArray();
        let array : DTOProduct[]=[];
        for (var p of result)
        {
            let obj = new DTOProduct(p.name,p.category,p.price,p.imgurl);
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