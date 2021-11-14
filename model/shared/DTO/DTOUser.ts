export  default class DTOUser
{
   idcard: string;
   username: string;
   email: string;
   hashh: string;
   password: string;
   typeuserr: string;


   
   constructor(pidcard:string,pusername:string,pemail:string,
   ptypeuserr:string ,phashh:string ,ppassword:string )
   {
       this.idcard=pidcard;
       this.username=pusername;
       this.email=pemail;
       this.typeuserr=ptypeuserr;
       this.hashh=phashh;
       this.password=ppassword;
   

   }
      
}