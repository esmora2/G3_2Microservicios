import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private readonly httpService: HttpService) {}

  getPokemonByName(name: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${this.apiUrl}${name}`).pipe(
      map(response => response.data),
    );
  }
}
