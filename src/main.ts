import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('PORT') || 7777);
}
bootstrap();
/** TODO
 *env_file use, DDD
 config validation DDDDDD
 use PORT from config service DDDD
 health_check
 remove POSTGRES_DB env DDDDDD
 */
