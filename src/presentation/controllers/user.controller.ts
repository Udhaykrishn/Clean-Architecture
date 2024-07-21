import { Controller,Post,Body } from "@nestjs/common";
import { CreateUserUseCase } from '../../application/use-cases/user/create-user.use-case';
import { CreateUserDto } from "src/application/use-cases/dtos/user/create-user.dto";
import { UserViewModel } from "../view-models/user.view-model";


@Controller("users")
export class UserController{
    constructor(
        private createUserUseCase:CreateUserUseCase
    ){}

    @Post()
    async createUser(@Body() createUserDto:CreateUserDto):Promise<UserViewModel>{
        const user = await this.createUserUseCase.execute(createUserDto)
        return new UserViewModel(user)
    }
}