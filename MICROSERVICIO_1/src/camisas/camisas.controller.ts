import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CamisasService } from './camisas.service';
import { CreateCamisaDto } from './dto/create-camisa.dto';
import { UpdateCamisaDto } from './dto/update-camisa.dto';

@Controller('camisas')
export class CamisasController {
  constructor(private readonly camisasService: CamisasService) {}

  @Post()
  create(@Body() createCamisaDto: CreateCamisaDto) {
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
