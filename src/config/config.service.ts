import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  config: Record<string, unknown> = {};
  constructor() {
    this.config.PORT = Number(process.env.PORT);
    this.config.DATABASE_URL = process.env.DATABASE_URL;
  }
  get<T>(key: string) {
    return this.config[key] as T | undefined;
  }
}
