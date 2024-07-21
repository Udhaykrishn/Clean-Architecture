import { Module } from '@nestjs/common';
import { UserController } from './presentation/controllers/user.controller';
import { BookController } from './presentation/controllers/book.controller';
import { PrismaService } from './infrastruacure/prisma/prisma.service';
import { PrismaUserRepository } from './infrastruacure/repositores/prisma-user.repository';
import { PrismaBookRepository } from './infrastruacure/repositores/prisma-book.repository';
import { CreateUserUseCase } from './application/use-cases/user/create-user.use-case';
import { CreateBookUseCase } from './application/use-cases/book/create-book.use-case';


@Module({
  controllers:[UserController,BookController],
  providers:[
    PrismaService,
    {
      provide:"UserRepository",
      useClass:PrismaUserRepository
    },
    {
      provide:"BookRepository",
      useClass:PrismaBookRepository
    },
    CreateUserUseCase,
    CreateBookUseCase
  ]
 
})
export class AppModule {}
