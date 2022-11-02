import { PrismaService } from './prisma.service';
import { Usuario, Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    user(userWhereUniqueInput: Prisma.UsuarioWhereUniqueInput): Promise<Usuario | null>;
    users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UsuarioWhereUniqueInput;
        where?: Prisma.UsuarioWhereInput;
        orderBy?: Prisma.UsuarioOrderByWithRelationInput;
    }): Promise<Usuario[]>;
    createUser(data: Prisma.UsuarioCreateInput): Promise<Usuario>;
    updateUser(params: {
        where: Prisma.UsuarioWhereUniqueInput;
        data: Prisma.UsuarioUpdateInput;
    }): Promise<Usuario>;
    deleteUser(where: Prisma.UsuarioWhereUniqueInput): Promise<Usuario>;
}
