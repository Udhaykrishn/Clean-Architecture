import { Book } from "src/domain/entities/book.entity";

export class BookViewModel{
    id:number;
    title:string;
    authorId:number

    constructor(book:Book​​){
        this.id = book.id
        this.title = book.title
        this.authorId = book.authorId
    }
}