import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const { APP_PORT } = process.env;
    return APP_PORT;
  }
}
