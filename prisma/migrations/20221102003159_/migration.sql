/*
  Warnings:

  - A unique constraint covering the columns `[codigo_productos]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.
  - Made the column `codigo_productos` on table `Producto` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Orden_Produccion" DROP CONSTRAINT "Orden_Produccion_id_producto_fkey";

-- AlterTable
ALTER TABLE "Orden_Produccion" ALTER COLUMN "id_producto" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Producto" ALTER COLUMN "codigo_productos" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Producto_codigo_productos_key" ON "Producto"("codigo_productos");

-- AddForeignKey
ALTER TABLE "Orden_Produccion" ADD CONSTRAINT "Orden_Produccion_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Producto"("codigo_productos") ON DELETE RESTRICT ON UPDATE CASCADE;
