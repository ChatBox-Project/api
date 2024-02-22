import { Test, TestingModule } from '@nestjs/testing';
import { BootcampDataService } from './bootcamp-data.service';

describe('BootcampDataService', () => {
  let service: BootcampDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BootcampDataService],
    }).compile();

    service = module.get<BootcampDataService>(BootcampDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
