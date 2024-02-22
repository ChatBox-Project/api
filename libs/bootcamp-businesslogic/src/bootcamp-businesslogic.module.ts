import { Module } from '@nestjs/common';
import { BootcampBusinesslogicService } from './bootcamp-businesslogic.service';

@Module({
  providers: [BootcampBusinesslogicService],
  exports: [BootcampBusinesslogicService],
})
export class BootcampBusinesslogicModule {}
