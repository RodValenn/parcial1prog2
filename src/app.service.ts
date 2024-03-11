import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHola(): string {
    return 'hola mundo';
  }
}
