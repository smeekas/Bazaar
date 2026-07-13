import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { ConfigService } from '../config/config.service';

@Module({
  providers: [DatabaseService, ConfigService],
  exports: [DatabaseService],
})
@Global()
export class DataBaseModule {}
