import { Controller, Post, Body, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { OPService } from "./op.service";
import { Usuario as UserModel } from "@prisma/client";

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly operationService: OPService
  ) {}

  @Post("user")
  async signupUser(
    @Body() userData: { name?: string; email: string }
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
