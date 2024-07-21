import { User } from "../entities/user.entity";

export interface UserRepoitory{
    create(user:Omit<User,"id">):Promise<User>
    findByEmail(email:string):Promise<User | null>
}