import { Logger } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { IOPControl, IOPRework, IOProduction, IProductionModule } from "./models/op-statisticts-model";
export declare class OPService {
    private prisma;
    private logger;
    constructor(prisma: PrismaService, logger: Logger);
    opStatistics(id: string): Promise<IOProduction>;
    opControl(id: string): Promise<IOPControl>;
    opRework(id: string): Promise<IOPRework>;
    opProductionModule(id: string): Promise<IProductionModule>;
}
