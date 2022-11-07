import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import { IOPStatistics } from './models/op-statisticts-model';
import { Sql } from '@prisma/client/runtime';

@Injectable()
export class OPService {
  constructor(private prisma: PrismaService) {}

  async opStatistics(id: string): Promise<IOPStatistics> {
    const sqlQuery: string = `
    select case when ((o.cantidad_placas / op.cantidad)*100) is null 
    then 100
    else case when (o.cantidad_placas / op.cantidad) * 100 > 100 then 100 else (o.cantidad_placas / op.cantidad) * 100 end end
    as completado,
    to2.descripcion  as proceso,
          o.cantidad_placas as cantidadPlacas
    from "Operacion" o
    join "Tarea" t ON t.id_operacion = o.id
    join "Orden_Produccion" op on op.numero_orden  = t.id_orden_produccion
    JOIN "Tipo_Operacion" to2 ON to2.id = o.tipo_operacion `
    const opStatistics: IOPStatistics = await this.prisma.$queryRawUnsafe<IOPStatistics>(sqlQuery)
    return opStatistics
  }
}