import { PartialType } from '@nestjs/mapped-types';
import { CreateCamisaDto } from './create-camisa.dto';
import { IsInt, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class UpdateCamisaDto {
    @IsInt()
    @Min(100)  
    @IsOptional()
    idCliente?: number;

    @IsString()
    @IsOptional()
    color?: string;

    @IsString()
    @IsOptional()
    talla?: string;

    @IsPositive()
    @IsOptional()
    precio?: number;

    @IsString()
    @IsOptional()
    ImagenEstampado?: string;
}
