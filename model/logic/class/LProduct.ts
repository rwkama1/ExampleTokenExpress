import DTOProduct from "../../shared/DTO/DTOProduct";

export  default class LProduct
{
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _category: string;
    public get category(): string {
        return this._category;
    }
    public set category(value: string) {
        this._category = value;
    }
    private _price: number;
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    private _imgurl: string;
    public get imgurl(): string {
        return this._imgurl;
    }
    public set imgurl(value: string) {
        this._imgurl = value;
    }
 

    //********************************** */

    getDTO=()=>
    {
        let dtop=new DTOProduct(this.name,this.category,this.price,this.imgurl);
        return dtop
    } 
    
   constructor(pname:string,pcategory:string,pprice:number,pimgurl:string)
   {
     
    this.name=pname;
    this.category=pcategory;  
    this.price=pprice;
    this.imgurl=pimgurl;     
   }
      
}