import DataProduct from "../data/DataProduct";
import DTOProduct from "../shared/DTO/DTOProduct";
import { LogicException } from "../shared/exceptions/logicexception";
import LGetProducts from "./gets/LGetProduct";
import LGetUsers from "./gets/LGetUsers";
import InstanceLClass from "./instanceClass/instance";
import { InstanceArrayDTO } from "./instanceClass/instanceArrayDto";
import LogicUser from "./LogicUser";
import LJwt from "./security/jwt";

export default class LogicProduct
{
    private static instancia: LogicProduct;
    private constructor() { }
    public static getInstance(): LogicProduct {
        if (!LogicProduct.instancia) {
            LogicProduct.instancia = new LogicProduct();
        }

        return LogicProduct.instancia;
    }

    registerProduct=async(dtp:DTOProduct,token)=>
    {
        let productserach = await LGetProducts.searchProduct(dtp.name);
        if(productserach!=null)
        {
            throw new LogicException("That Product does not exists in the system");

        }
       
       let verifyusertoken=await LJwt.verifytoken(token);
      
        if(verifyusertoken.typeuserr!="Moderador")
        {
            throw new LogicException("Require Morderador Role");
            
        }
        let logicp=InstanceLClass.instanceLProduct(dtp);
        let data=logicp.getDTO();
        let addp=DataProduct.registerProduct(data);
        return addp
    }
    updateProduct=async(dtp:DTOProduct,token)=>
    {
        let verifytokenuser=await LJwt.verifytoken(token);
        if(verifytokenuser.typeuserr!="Moderador")
        {
            throw new LogicException("Require Morderador Role");
            
        }
        let logicp=InstanceLClass.instanceLProduct(dtp);
        let data=logicp.getDTO();
        let addp=DataProduct.updateProduct(data);
        return addp
    }
    deleteProduct=async(dtp:DTOProduct,token)=>
    {
        let verifytokenuser=await LJwt.verifytoken(token);
        if(verifytokenuser.typeuserr!="Moderador")
        {
            throw new LogicException("Require Morderador Role");
            
        }
        let logicp=InstanceLClass.instanceLProduct(dtp);
        let data=logicp.getDTO();
        let addp=DataProduct.deleteProduct(data);
        return addp
    }
    //*********************************************************** */
    getLProductos=async(token:string)=>
    {
        let verifytokenuser=await LJwt.verifytoken(token);
        if(verifytokenuser.typeuserr!="Moderador")
        {
            throw new LogicException("Require Morderador Role");
            
        }
        let getp=await LGetProducts.getLProductos();
        let arraydtop=InstanceArrayDTO.instanceArrayproducto(getp)
       return arraydtop; 
    }
    searchProduct=async(name:string,token:string)=>
    {
        let verifytokenuser=await LJwt.verifytoken(token);
        if(verifytokenuser.typeuserr!="Moderador")
        {
            throw new LogicException("Require Morderador Role");
            
        }
        let getp=await LGetProducts.searchProduct(name);
       return getp.getDTO(); 
    }

}