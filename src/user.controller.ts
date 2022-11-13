import { Controller, Get } from '@nestjs/common';
import { Public, Roles } from 'nest-keycloak-connect';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/public')
  @Public()
  getpublic(): string {
    return `${this.userService.greet()}, Everybody!`;
  }

  @Get('/user')
  @Roles({ roles: ['user'] })
  getUser(): string {
    return `${this.userService.greet()}, User!`;
  }

  @Get('/admin')
  @Roles({ roles: ['admin'] })
  getAdmin(): string {
    return `${this.userService.greet()}, Admin!`;
  }
}
