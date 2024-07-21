import {IsString,IsNumber} from "class-validator"

export class CreateBookDto{
    @IsString()
    title:string;

    @IsNumber()
    authorId:number
}

