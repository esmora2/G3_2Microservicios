import {  IsDecimal, IsInt, IsPositive, IsString, Min} from "class-validator";

export class CreateCamisaDto {

    @IsInt()
    @Min(100)  
    idCliente: number;

    @IsString()
    color: string;

    @IsString()
    talla: string;

    @IsPositive()
    precio: number;

    @IsString()
    ImagenEstampado: string;
}
