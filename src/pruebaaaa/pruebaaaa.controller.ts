import { Controller, Get, Post,Body,Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller()
export class PruebaaaaController {
    constructor(private readonly appService: AppService) {}
    @Get()
    getHolaMundo(){
        return this.appService.getHola() ;
    }

    @Post()
    async create(@Body("nombre") createCatDto) {
      return 'Nombre guardado correctamente';
    }
    @Get('/saludo/:name')
    getSaludo(@Param('name') name: string): string {
        return `Bienvenido ${name}` ;
    
    }
}