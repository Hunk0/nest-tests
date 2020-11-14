import { Controller, Get, Post, Put, Param, Query, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';

@ApiTags('cats')
@Controller('cats')
export class CatsController {

    constructor( private readonly catsService: CatsService ){}

    @Get('Random')
    GetCat() {
        return this.catsService.GetCat()
    }

}