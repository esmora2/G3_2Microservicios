import { IsInt, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class CreateCamisaDto {

    @IsOptional()
    idCliente?: number;

    @IsString()
    color: string;

    @IsString()
    talla: string;

    @IsPositive()
    precio: number;

    @IsString()
    ImagenEstampado: string;
}
