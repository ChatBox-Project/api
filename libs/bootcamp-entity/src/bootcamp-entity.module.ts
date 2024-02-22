import { Module } from '@nestjs/common';
import { BootcampEntityService } from './bootcamp-entity.service';

@Module({
  providers: [BootcampEntityService],
  exports: [BootcampEntityService],
})
export class BootcampEntityModule {}
