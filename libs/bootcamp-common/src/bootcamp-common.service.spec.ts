import { Test, TestingModule } from '@nestjs/testing';
import { BootcampCommonService } from './bootcamp-common.service';

describe('BootcampCommonService', () => {
  let service: BootcampCommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BootcampCommonService],
    }).compile();

    service = module.get<BootcampCommonService>(BootcampCommonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
