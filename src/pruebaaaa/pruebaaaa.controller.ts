import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller()
export class PruebaaaaController {
    constructor(private readonly appService: AppService) {}
    @Get()
    getHolaMundo(){
        return this.appService.getHola() ;
    }
}
