import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const points: number = 0;
    return 'Hello World!';
  }
}
