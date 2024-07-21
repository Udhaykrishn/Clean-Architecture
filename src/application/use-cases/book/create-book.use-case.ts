import { Inject,Injectable } from "@nestjs/common";
import { Book } from "src/domain/entities/book.entity";
import { BookRepository } from "src/domain/repositories/book-repository.interface";
import { CreateBookDto } from "../dtos/book/create-book.dto";

@Injectable()
export class CreateBookUseCase{
    constructor(
        @Inject("BookRepository")
        private readonly bookRepository:BookRepository
    ){}

    async execute(createBookDto:CreateBookDto):Promise<Book>{
        return this.bookRepository.cretae(createBookDto)
    }
}