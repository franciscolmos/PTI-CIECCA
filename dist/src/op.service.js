"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const client_1 = require("@prisma/client");
let OPService = class OPService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async opStatistics(id) {
        const opStatistics = await this.prisma.$queryRaw(client_1.Prisma.sql `
      SELECT CASE WHEN ((o."${client_1.Prisma.OperacionScalarFieldEnum.cantidad_placas}" / op."${client_1.Prisma.Orden_ProduccionScalarFieldEnum.cantidad}")*100) is null
                  THEN 100
                  ELSE CASE WHEN (o."${client_1.Prisma.OperacionScalarFieldEnum.cantidad_placas}" / op."${client_1.Prisma.Orden_ProduccionScalarFieldEnum.cantidad}")*100 > 100 THEN 100 ELSE
                  (o."${client_1.Prisma.OperacionScalarFieldEnum.cantidad_placas}" / op."${client_1.Prisma.Orden_ProduccionScalarFieldEnum.cantidad}")*100 END END
            as completado,
             p."${client_1.Prisma.ProductoScalarFieldEnum.descripcion}" as proceso,
             o."${client_1.Prisma.OperacionScalarFieldEnum.cantidad_placas}" as cantidadPlacas
      FROM "${client_1.Prisma.ModelName.Orden_Produccion}" op
        JOIN "${client_1.Prisma.ModelName.Producto}" p
          on p."${client_1.Prisma.ProductoScalarFieldEnum.codigo_productos}" = op."${client_1.Prisma.Orden_ProduccionScalarFieldEnum.id_producto}"
        JOIN "${client_1.Prisma.ModelName.Tarea}" t
          on t."${client_1.Prisma.TareaScalarFieldEnum.id_orden_produccion}" = op."${client_1.Prisma.Orden_ProduccionScalarFieldEnum.numero_orden}"
        JOIN "${client_1.Prisma.ModelName.Operacion}" o
          on t."${client_1.Prisma.TareaScalarFieldEnum.id_operacion}" = op."${client_1.Prisma.OperacionScalarFieldEnum.id}"
        WHERE op."${client_1.Prisma.Orden_ProduccionScalarFieldEnum.numero_orden}" = ${id}`);
        return opStatistics;
    }
};
OPService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OPService);
exports.OPService = OPService;
//# sourceMappingURL=op.service.js.map