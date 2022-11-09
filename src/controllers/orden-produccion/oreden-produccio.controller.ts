import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { IOProduction, IProductionModule } from "src/models/op-statisticts-model";
import { OPService } from "../../op.service";

@Controller("order-production")
export class OrdenProduccionController {
  constructor(private readonly OPService: OPService) {}

  @Get(":id")
  async avgOperationFailure(
    @Param("id") id: string
  ): Promise<IProductionModule> {
    return this.OPService.opProductionModule(id);
  }
}
