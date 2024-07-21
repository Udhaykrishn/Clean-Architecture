import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Book } from "src/domain/entities/book.entity"; 
import { BookRepository } from "src/domain/repositories/book-repository.interface";

@Injectable()
export class PrismaBookRepository implements BookRepository{
    constructor(private prisma:PrismaService){}

    async cretae(book: Omit<Book, "id">): Promise<Book> {
        const createdBook = await this.prisma.book.create({
            data:book
        })

        return new Book(createdBook.id,createdBook.title,createdBook.authorId)
    }
}