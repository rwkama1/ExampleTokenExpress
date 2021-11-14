import { type } from "os";
import DTOUser from "../../shared/DTO/DTOUser";
import { LogicException } from "../../shared/exceptions/logicexception";

export  default class LUser
{
    //************************* */
    private _idcard: string;
   
    public get idcard(): string {
        return this._idcard;
    }
    public set idcard(value: string) {
        var numbers = /^[0-9]+$/;
        if (!value.trim().match(numbers)) {
              throw new LogicException("The identity card must have only numbers");
                }
        if (value.trim() === "") {
              throw new LogicException("The identity card cannot be empty");
               }
        this._idcard = value;
    }
     //****************************** */
   private _username: string;
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        if (value.trim() === "") {
            throw new LogicException("The username cannot be empty");
             }
        this._username = value;
    }
     //****************************** */
   private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    //****************************** */
   private _hashh: string;
    public get hashh(): string {
        return this._hashh;
    }
    public set hashh(value: string) {
        this._hashh = value;
    }
 //****************************** */
   private _password: string;
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
     //****************************** */
   private _typeuserr: string;
    public get typeuserr(): string {
        return this._typeuserr;
    }
    public set typeuserr(value: string) {
        if (value.trim()!="Administrator" && value.trim()!="Moderador")
        {
            throw new LogicException("The user can only be of the type Administrator or Moderador");
        }
        this._typeuserr = value;
    }
//********************************* */
    private _token: string;
    
    public get token(): string {
        return this._token;
    }
    public set token(value: string) {
      
        this._token = value;
    }
//********************************** */

getDTO=()=>
{
  let dtouser=new DTOUser(this.idcard,this.username,this.email,this.typeuserr,this.hashh,this.password);
   return dtouser
} 

   constructor(pidcard:string,pusername:string,pemail:string,
   ptypeuserr:string ,phashh:string ,ppassword:string,ptoken:string )
   {
       this.idcard=pidcard;
       this.username=pusername;
       this.email=pemail;
       this.typeuserr=ptypeuserr;
       this.hashh=phashh;
       this.password=ppassword;
       this.token=ptoken;
    
   

   }
      
}