import { IOPStatistics } from "src/models/op-statisticts-model";
import { OPService } from "../../op.service";
export declare class OrdenProduccionController {
    private readonly OPService;
    constructor(OPService: OPService);
    avgOperationFailure(id: string): Promise<IOPStatistics>;
}
