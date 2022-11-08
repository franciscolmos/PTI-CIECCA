import { Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { IOPStatistics } from './models/op-statisticts-model';
export declare class OPService {
    private prisma;
    private logger;
    constructor(prisma: PrismaService, logger: Logger);
    opStatistics(id: string): Promise<IOPStatistics>;
}
