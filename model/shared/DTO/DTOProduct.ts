export  default class DTOProduct
{
    name: string;
    category: string;
    price:number;
    imgurl:string;
 
   constructor(pname:string,pcategory:string,pprice:number,pimgurl:string)
   {
     
    this.name=pname;
    this.category=pcategory;  
    this.price=pprice;
    this.imgurl=pimgurl;     
   }
      
}