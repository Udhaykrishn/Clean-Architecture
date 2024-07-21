import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { User } from "src/domain/entities/user.entity";
import { UserRepoitory } from "src/domain/repositories/user-repository.interface";


@Injectable()
export class PrismaUserRepository implements UserRepoitory{
    constructor(private prisma:PrismaService){}
    async create(user: Omit<User, "id">): Promise<User> {
        const createdUser = await this.prisma.user.create({
            data:user
        })
        
        return new User(createdUser.id,createdUser.email,createdUser.name)
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where:{email},
        })
        return user ? new User(user.id,user.email,user.name):null;
    }
}