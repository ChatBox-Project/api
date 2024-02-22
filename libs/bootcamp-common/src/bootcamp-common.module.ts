import { Module } from '@nestjs/common';
import { BootcampCommonService } from './bootcamp-common.service';

@Module({
  providers: [BootcampCommonService],
  exports: [BootcampCommonService],
})
export class BootcampCommonModule {}
