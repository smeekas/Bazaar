import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';
import { ConfigService } from '../config/config.service';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleDestroy {
  constructor(private configService: ConfigService) {
    const dbUrl = configService.get('DATABASE_URL');
    if (!dbUrl || typeof dbUrl !== 'string') {
      throw Error('database url do not exists');
    }
    super({
      adapter: new PrismaPg({
        connectionString: dbUrl,
      }),
    });
    // this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
