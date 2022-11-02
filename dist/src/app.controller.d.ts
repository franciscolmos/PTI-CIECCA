import { UserService } from './user.service';
import { Usuario as UserModel } from '@prisma/client';
export declare class AppController {
    private readonly userService;
    constructor(userService: UserService);
    signupUser(userData: {
        name?: string;
        email: string;
    }): Promise<UserModel>;
}
