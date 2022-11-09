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
      SELECT to2.descripcion as proceso,
      CASE WHEN ((SUM(o.cantidad_placas) / SUM(op.cantidad))*100) IS NULL 
          THEN 100
          ELSE CASE WHEN (SUM(o.cantidad_placas) / SUM(op.cantidad)) * 100 > 100 
            THEN 100
            ELSE (SUM(o.cantidad_placas) / SUM(op.cantidad)) * 100 END END
          AS completado,
        case when (SUM(o.cantidad_placas) > SUM(op.cantidad)) then SUM(op.cantidad) else SUM(o.cantidad_placas) end as cantidadPlacas
        FROM "Operacion" o
        JOIN "Tarea" t ON t.id_operacion = o.id
        JOIN "Orden_Produccion" op on op.numero_orden  = t.id_orden_produccion
        JOIN "Tipo_Operacion" to2 ON to2.id = o.tipo_operacion
        WHERE op.numero_orden = ${id}
          AND to2.id in (16, 17, 18, 19, 30, 31, 32, 33)
      GROUP BY to2.descripcion`;
        this.logger.debug(sqlQuery);
        const opStatistics = await this.prisma.$queryRawUnsafe(sqlQuery);
        return opStatistics;
    }
    async opControl(id) {
        const sqlQuery = `
    SELECT to2.descripcion  as proceso,
      SUM(o.cantidad_placas) as placasOk,
      SUM(o.cantidad_placas_fallas) as placasNC
    FROM "Operacion" o
    JOIN "Tarea" t ON t.id_operacion = o.id
    JOIN "Orden_Produccion" op on op.numero_orden  = t.id_orden_produccion
    JOIN "Tipo_Operacion" to2 ON to2.id = o.tipo_operacion
    WHERE op.numero_orden = ${id}
      AND to2.id in (9, 10, 11, 12, 13, 14, 35, 36, 37)
    GROUP BY to2.descripcion`;
        this.logger.debug(sqlQuery);
        const opControl = await this.prisma.$queryRawUnsafe(sqlQuery);
        return opControl;
    }
    async opRework(id) {
        const sqlQuery = `
    SELECT to2.descripcion  as proceso,
      SUM(o.cantidad_placas) as cantidad_placas
    FROM "Operacion" o
    JOIN "Tarea" t ON t.id_operacion = o.id
    JOIN "Orden_Produccion" op on op.numero_orden  = t.id_orden_produccion
    JOIN "Tipo_Operacion" to2 ON to2.id = o.tipo_operacion
    WHERE op.numero_orden = ${id}
      AND to2.id in (21, 22, 23, 24, 25, 26)
    GROUP BY to2.descripcion`;
        this.logger.debug(sqlQuery);
        const opRework = await this.prisma.$queryRawUnsafe(sqlQuery);
        return opRework;
    }
    async opProductionModule(id) {
        const opProduction = await this.opStatistics(id);
        const opControl = await this.opControl(id);
        const opRework = await this.opRework(id);
        const opProductionModule = {
            production: opProduction,
            control: opControl,
            rework: opRework
        };
        return opProductionModule;
    }
};
OPService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, common_1.Logger])
], OPService);
exports.OPService = OPService;
//# sourceMappingURL=op.service.js.map