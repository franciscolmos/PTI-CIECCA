import { Injectable } from '@nestjs/common';
import * as users from './users.json';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async login(user: any): Promise<string> {
    console.log('user', user);
    console.log('users', users);
    return 'OK';
  }
}
