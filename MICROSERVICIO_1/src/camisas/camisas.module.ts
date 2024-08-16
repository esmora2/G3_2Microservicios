import { Module } from '@nestjs/common';
import { CamisasService } from './camisas.service';
import { CamisasController } from './camisas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Camisa } from './entities/camisa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Camisa])],
  controllers: [CamisasController],
  providers: [CamisasService],
})
export class CamisasModule {}
