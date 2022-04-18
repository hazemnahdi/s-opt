import { User } from "./user";

export class Avance{
    
    constructor(
        public  _id: string,
        public mois: String,
        public annee: String,
        public montantAvance: number,
        public users: User,
        
    ) {  }
}
