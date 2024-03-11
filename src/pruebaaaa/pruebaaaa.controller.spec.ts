import { Test, TestingModule } from '@nestjs/testing';
import { PruebaaaaController } from './Pruebaaaa.controller';

describe('PruebaaaaController', () => {
  let controller: PruebaaaaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PruebaaaaController],
    }).compile();

    controller = module.get<PruebaaaaController>(PruebaaaaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
