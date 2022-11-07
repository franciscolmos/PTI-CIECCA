import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma.service";
import { UserService } from "./user.service";
import { OPService } from "./op.service";
import { OrdenProduccionController } from "./controllers/orden-produccion/oreden-produccio.controller";

@Module({
  imports: [],
  controllers: [AppController, OrdenProduccionController],
  providers: [AppService, UserService, OPService, PrismaService],
})
export class AppModule {}
