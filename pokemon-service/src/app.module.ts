import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonController } from './pokemon/pokemon.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],  // Importa HttpModule aquí
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonService],
})
export class AppModule {}
