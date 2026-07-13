import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './common/database.service';

@Controller()
export class AppController {
  constructor(private readonly dataBaseService: DatabaseService) {}

  @Get('health')
  async getHealth(): Promise<boolean> {
    try {
      await this.dataBaseService.$queryRaw`SELECT 1`;
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
