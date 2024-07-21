export class Book{
    id:number;
    title:string;
    authorId:number;

    constructor(
        id:number,
        title:string,
        authorId:number,

    ){
        this.id = id;
        this.title = title;
        this.authorId = authorId;
    }
}