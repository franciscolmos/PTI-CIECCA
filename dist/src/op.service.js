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
let OPService = class OPService {
    constructor(prisma, logger) {
        this.prisma = prisma;
        this.logger = logger;
    }
    async opStatistics(id) {
        const sqlQuery = `
      SELECT CASE WHEN ((o.cantidad_placas / op.cantidad)*100) IS NULL 
        THEN 100
        ELSE CASE WHEN (o.cantidad_placas / op.cantidad) * 100 > 100 
          THEN 100
          ELSE (o.cantidad_placas / op.cantidad) * 100 END END
        AS completado,
      to2.descripcion  as proceso,
            o.cantidad_placas as cantidadPlacas
      FROM "Operacion" o
      JOIN "Tarea" t ON t.id_operacion = o.id
      JOIN "Orden_Produccion" op on op.numero_orden  = t.id_orden_produccion
      JOIN "Tipo_Operacion" to2 ON to2.id = o.tipo_operacion
      WHERE op.numero_orden = ${id}`;
        this.logger.debug(sqlQuery);
        const opStatistics = await this.prisma.$queryRawUnsafe(sqlQuery);
        return opStatistics;
    }
};
OPService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_1.Logger])
], OPService);
exports.OPService = OPService;
//# sourceMappingURL=op.service.js.map