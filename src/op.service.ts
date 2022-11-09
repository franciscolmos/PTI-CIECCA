import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import {
  IOPControl,
  IOPRework,
  IOProduction,
  IProductionModule,
} from "./models/op-statisticts-model";
@Injectable()
export class OPService {
  constructor(private prisma: PrismaService, private logger: Logger) {}

  async opStatistics(id: string): Promise<IOProduction> {
    const sqlQuery: string = `
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
    const opStatistics: IOProduction =
      await this.prisma.$queryRawUnsafe<IOProduction>(sqlQuery);
    return opStatistics;
  }

  async opControl(id: string): Promise<IOPControl> {
    const sqlQuery: string = `
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
    const opControl: IOPControl = await this.prisma.$queryRawUnsafe<IOPControl>(
      sqlQuery
    );
    return opControl;
  }

  async opRework(id: string): Promise<IOPRework> {
    const sqlQuery: string = `
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
    const opRework: IOPRework = await this.prisma.$queryRawUnsafe<IOPRework>(
      sqlQuery
    );
    return opRework;
  }

  async opProductionModule(id: string): Promise<IProductionModule> {
    const opProduction: IOProduction = await this.opStatistics(id);
    const opControl: IOPControl = await this.opControl(id);
    const opRework: IOPRework = await this.opRework(id);
    const opProductionModule: IProductionModule = {
      production: opProduction,
      control: opControl,
      rework: opRework
    }
    return opProductionModule;
  }
}
