import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
@Injectable()
export class RequestCatsService {

    url: string = 'https://aws.random.cat/'

    constructor( private http: HttpService) {

    }
    get(  endpoint: string ) {
        return this.http.get(`${this.url}${endpoint}`)
        .pipe( map( response => response.data ) )
    }
}