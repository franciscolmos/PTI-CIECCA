import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { IOPStatistics } from './models/op-statisticts-model';
@Injectable()
export class OPService {
  constructor(
    private prisma: PrismaService,
    private logger: Logger) {}

  async opStatistics(id: string): Promise<IOPStatistics> {
    const sqlQuery: string = `
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
      WHERE op.numero_orden = ${id}`
    this.logger.debug(sqlQuery);
    const opStatistics: IOPStatistics = await this.prisma.$queryRawUnsafe<IOPStatistics>(sqlQuery)
    return opStatistics
  }
}