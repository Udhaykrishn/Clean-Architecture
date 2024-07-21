import { Book } from "../entities/book.entity";

export interface BookRepository{
    cretae(book:Omit<Book,'id'>):Promise<Book>
}