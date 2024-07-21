import { User } from "src/domain/entities/user.entity";

export class UserViewModel{
    id:number;
    email:string;
    name:string;

    constructor(user:User​​){
        this.id = user.id
        this.email = user.email
        this.name = user.name
    }
}