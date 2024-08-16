import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CamisasModule } from './camisas/camisas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CamisasModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // El nombre del servicio MySQL en docker-compose.yml
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
