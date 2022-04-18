import { User } from "./user";

export class Conge{
    
    constructor(
        public  _id: string,
        public dateDebut: String,
        public dateFin: String,
        public users: User,
        
    ) {  }
}
