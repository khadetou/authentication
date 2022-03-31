import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Role } from './auth/role.enum';
import { Roles } from './auth/roles.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles(Role.Admin)
  getHello(): string {
    return this.appService.getHello();
  }
}
