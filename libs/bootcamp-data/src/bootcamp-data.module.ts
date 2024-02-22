import { Module } from '@nestjs/common';
import { BootcampDataService } from './bootcamp-data.service';

@Module({
  providers: [BootcampDataService],
  exports: [BootcampDataService],
})
export class BootcampDataModule {}
