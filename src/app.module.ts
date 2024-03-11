import { Module } from '@nestjs/common';
import { PruebaaaaController } from 'src/pruebaaaa/pruebaaaa.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PruebaaaaController],
  providers: [AppService],
})
export class AppModule {}
