/*
  Warnings:

  - You are about to drop the column `tipo_operacion` on the `Tarea` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_operacion` on the `Tipo_Operacion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Operacion" ALTER COLUMN "nombre_proceso" DROP NOT NULL,
ALTER COLUMN "cant_total_componentes_soldados" DROP NOT NULL,
ALTER COLUMN "programa_utilizado" DROP NOT NULL,
ALTER COLUMN "cantidad_placas_fallas" DROP NOT NULL,
ALTER COLUMN "cantidad_placas" DROP NOT NULL,
ALTER COLUMN "comentarios" DROP NOT NULL,
ALTER COLUMN "equipos" DROP NOT NULL,
ALTER COLUMN "programa_impresora" DROP NOT NULL,
ALTER COLUMN "codigo_estano" DROP NOT NULL,
ALTER COLUMN "perfil_horno" DROP NOT NULL,
ALTER COLUMN "soldadora_ola" DROP NOT NULL,
ALTER COLUMN "programa_ola" DROP NOT NULL,
ALTER COLUMN "horno_refusion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Orden_Produccion" ALTER COLUMN "fecha_orden" DROP NOT NULL,
ALTER COLUMN "descripcion" DROP NOT NULL,
ALTER COLUMN "cantidad" DROP NOT NULL,
ALTER COLUMN "observaciones" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Producto" ALTER COLUMN "codigo_productos" DROP NOT NULL,
ALTER COLUMN "descripcion" DROP NOT NULL,
ALTER COLUMN "comp_smd_bot" DROP NOT NULL,
ALTER COLUMN "var_smd_bot" DROP NOT NULL,
ALTER COLUMN "comp_smd_top" DROP NOT NULL,
ALTER COLUMN "var_smd_top" DROP NOT NULL,
ALTER COLUMN "var_bot_top" DROP NOT NULL,
ALTER COLUMN "comp_tht_bot" DROP NOT NULL,
ALTER COLUMN "comp_tht_top" DROP NOT NULL,
ALTER COLUMN "ptos_sold_man_smd" DROP NOT NULL,
ALTER COLUMN "ptos_sold_man_tht" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tarea" DROP COLUMN "tipo_operacion",
ALTER COLUMN "marca_temporal" DROP NOT NULL,
ALTER COLUMN "nombre_colaborador" DROP NOT NULL,
ALTER COLUMN "fecha" DROP NOT NULL,
ALTER COLUMN "hora_inicio" DROP NOT NULL,
ALTER COLUMN "hora_fin" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tipo_Operacion" DROP COLUMN "tipo_operacion",
ALTER COLUMN "descripcion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "edad" DROP NOT NULL;
