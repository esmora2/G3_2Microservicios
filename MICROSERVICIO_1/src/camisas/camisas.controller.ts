import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { CamisasService } from './camisas.service';
import { CreateCamisaDto } from './dto/create-camisa.dto';
import { UpdateCamisaDto } from './dto/update-camisa.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('camisas')
export class CamisasController {
  constructor(private readonly camisasService: CamisasService,
    private readonly jwtService: JwtService, 
  ) {}

  @Post()
  async create(@Body() createCamisaDto: CreateCamisaDto) {
    const token = createCamisaDto.idCliente as unknown as string;
    const secret = 'Sheylee y Asociados'; 


    const payload = this.jwtService.verify(token, { secret });

    const idCliente = Number(payload.sub);
    if (!Number.isInteger(idCliente) || idCliente < 1) {
      throw new Error('Invalid idCliente extracted from token');
    }


    createCamisaDto.idCliente = idCliente;

    return this.camisasService.create(createCamisaDto);
  }

  @Get()
  findAll() {
    return this.camisasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.camisasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCamisaDto: UpdateCamisaDto) {
    return this.camisasService.update(id, updateCamisaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.camisasService.remove(id);
  }
}
