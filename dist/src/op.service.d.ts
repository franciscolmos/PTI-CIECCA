import { PrismaService } from './prisma.service';
import { IOPStatistics } from './models/op-statisticts-model';
export declare class OPService {
    private prisma;
    constructor(prisma: PrismaService);
    opStatistics(id: string): Promise<IOPStatistics>;
}
