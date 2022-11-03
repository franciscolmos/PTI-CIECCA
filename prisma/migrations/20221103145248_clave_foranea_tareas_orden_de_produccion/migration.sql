/*
  Warnings:

  - A unique constraint covering the columns `[numero_orden]` on the table `Orden_Produccion` will be added. If there are existing duplicate values, this will fail.
  - Made the column `numero_orden` on table `Orden_Produccion` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_id_orden_produccion_fkey";

-- AlterTable
ALTER TABLE "Orden_Produccion" ALTER COLUMN "numero_orden" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Orden_Produccion_numero_orden_key" ON "Orden_Produccion"("numero_orden");

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_orden_produccion_fkey" FOREIGN KEY ("id_orden_produccion") REFERENCES "Orden_Produccion"("numero_orden") ON DELETE RESTRICT ON UPDATE CASCADE;
