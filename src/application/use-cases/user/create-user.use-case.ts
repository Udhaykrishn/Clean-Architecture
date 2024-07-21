import { UserRepoitory } from './../../../domain/repositories/user-repository.interface';
import { Inject,Injectable } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import {CreateUserDto} from "../dtos/user/create-user.dto"

@Injectable()
export class CreateUserUseCase{
    constructor(
        @Inject("UserRepository")
        private readonly userRepoitory:UserRepoitory
    ){}

    async execute(createUserDto:CreateUserDto):Promise<User>{
        const exisitingUser = await this.userRepoitory.findByEmail(createUserDto.email)
        if(exisitingUser){
            throw new Error("User with this email already exisiting")
        }
        return this.userRepoitory.create(createUserDto)
    }
}
