import DataProduct from "../../data/DataProduct";
import LProduct from "../class/LProduct";
import InstanceLClass from "../instanceClass/instance";

export default class LGetProducts
{
    static getLProductos=async()=>
    {
      let arrayp:LProduct[]=[];
        let datap= await DataProduct.getProducts();
        for(var dtpp of datap)
        {
        const logicp=InstanceLClass.instanceLProduct(dtpp);
        arrayp.push(logicp);
        }
    
      return arrayp; 
    }
      
    static searchProduct=async(name:string)=>
    {
      let datap= await this.getLProductos();
      for(let producto of datap)
        {
          if(name===producto.name)
          {
            return producto;
          }
        }
      return null;
    }
}