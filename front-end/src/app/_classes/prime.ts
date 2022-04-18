import { User } from "./user";

export class Prime{
    
    constructor(
        public  _id: string,
        public mois: String,
        public annee: String,
        public montantPrime: number,
        public libelle:String,
        public users:User,
        
        
    ) {  }
}