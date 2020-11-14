import { HttpException, Injectable } from '@nestjs/common';
import { RequestCatsService } from '../../shared/request-cats/request-cats.service';

@Injectable()
export class CatsService {

    constructor(
        private readonly requestCatsService: RequestCatsService
    ) { }

    async GetCat() {
        try {
            const item = await this.traerUnGato()
            const respuesta = {
                Nombre: "gatomon :v",
                Foto: item
            }
            return respuesta
        } catch (error) {
            if (error.response != null) {
                console.log(error)
                throw new HttpException(error.message, error.status)
            } else {
                throw new HttpException('error en la aplicacion', 500)

            }

        }
    }

    async traerUnGato() {
        try {
            const cat = await this.requestCatsService.get('meow').toPromise()
            return cat
        } catch (error) {
            console.log('FALLO')
            throw new HttpException('Woops, ha ocurrido un problema... intenta de nuevo mas tarde', 400)
        }
    }

}