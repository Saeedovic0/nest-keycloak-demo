import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  greet(): string {
    return 'Hello';
  }
}
