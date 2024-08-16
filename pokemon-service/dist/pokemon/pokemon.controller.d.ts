import { PokemonService } from './pokemon.service';
import { Observable } from 'rxjs';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    getPokemon(name: string): Observable<any>;
}
