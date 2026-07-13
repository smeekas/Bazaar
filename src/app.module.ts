import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ConfigModule } from './config/config.module';
import { DataBaseModule } from './common/database.module';

@Module({
  imports: [ConfigModule, DataBaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
