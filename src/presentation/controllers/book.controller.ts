import { Controller,Post,Body } from "@nestjs/common";
import { CreateBookUseCase } from "src/application/use-cases/book/create-book.use-case";
import { CreateBookDto } from "src/application/use-cases/dtos/book/create-book.dto";
import { BookViewModel } from "../view-models/book.view-model";

@Controller("books")

export class BookController{
    constructor(
        private createBookUseCase:CreateBookUseCase
    ){}

    @Post()
    async createBook(@Body() createBookDto:CreateBookDto):Promise<BookViewModel>{
        const book = await this.createBookUseCase.execute(createBookDto)

        return new BookViewModel(book)
    }
}