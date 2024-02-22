import { Test, TestingModule } from '@nestjs/testing';
import { BootcampEntityService } from './bootcamp-entity.service';

describe('BootcampEntityService', () => {
  let service: BootcampEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BootcampEntityService],
    }).compile();

    service = module.get<BootcampEntityService>(BootcampEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
