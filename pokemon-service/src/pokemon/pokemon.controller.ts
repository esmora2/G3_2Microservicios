import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Observable } from 'rxjs';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':name')
  getPokemon(@Param('name') name: string): Observable<any> {
    return this.pokemonService.getPokemonByName(name);
  }
}
