import { UserService } from "./user.service";
import { OPService } from "./op.service";
import { Usuario as UserModel } from "@prisma/client";
export declare class AppController {
    private readonly userService;
    private readonly operationService;
    constructor(userService: UserService, operationService: OPService);
    signupUser(userData: {
        name?: string;
        email: string;
    }): Promise<UserModel>;
}
