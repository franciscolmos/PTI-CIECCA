import { UserService } from './user.service';
export declare class AppController {
    private readonly userService;
    constructor(userService: UserService);
    getHello(body: any): Promise<string>;
}
