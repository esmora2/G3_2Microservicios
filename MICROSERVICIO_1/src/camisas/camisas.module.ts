import { Module } from '@nestjs/common';
import { CamisasService } from './camisas.service';
import { CamisasController } from './camisas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Camisa } from './entities/camisa.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Camisa]),
  JwtModule.register({
    secret: 'Sheylee y Asociados', 
    signOptions: { expiresIn: '60m' }, 
  }),
],
  controllers: [CamisasController],
  providers: [CamisasService],
})
export class CamisasModule {}
