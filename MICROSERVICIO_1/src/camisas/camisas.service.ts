import { Injectable } from '@nestjs/common';
import { CreateCamisaDto } from './dto/create-camisa.dto';
import { UpdateCamisaDto } from './dto/update-camisa.dto';
import { Camisa } from './entities/camisa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CamisasService {

  constructor(
    @InjectRepository(Camisa)
    private readonly camisaRepository: Repository<Camisa>,
  ) {}

  async create(createCamisaDto: CreateCamisaDto) {
    const camisa = this.camisaRepository.create(createCamisaDto);
    return await this.camisaRepository.save(camisa);
  }

  async findAll() {
    return await this.camisaRepository.find();
  }

  async findOne(id: number) {
    return await this.camisaRepository.findOneBy({id});
  }

  async update(id: number, updateCamisaDto: UpdateCamisaDto) {
    return await this.camisaRepository.update(id, updateCamisaDto);
  }

  async remove(id: number) {
    return await this.camisaRepository.softDelete({id});
  }
}
