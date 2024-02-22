import { Test, TestingModule } from '@nestjs/testing';
import { BootcampBusinesslogicService } from './bootcamp-businesslogic.service';

describe('BootcampBusinesslogicService', () => {
  let service: BootcampBusinesslogicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BootcampBusinesslogicService],
    }).compile();

    service = module.get<BootcampBusinesslogicService>(BootcampBusinesslogicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
