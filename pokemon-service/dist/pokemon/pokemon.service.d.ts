import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
export declare class PokemonService {
    private readonly httpService;
    private readonly apiUrl;
    constructor(httpService: HttpService);
    getPokemonByName(name: string): Observable<AxiosResponse<any>>;
}
