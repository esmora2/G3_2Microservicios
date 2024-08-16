import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule,
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
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
