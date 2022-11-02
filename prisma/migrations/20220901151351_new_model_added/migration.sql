/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "edad" INTEGER NOT NULL DEFAULT 28,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tarea" (
    "id" SERIAL NOT NULL,
    "marca_temporal" TIMESTAMP(3) NOT NULL,
    "nombre_colaborador" TEXT NOT NULL,
    "id_orden_produccion" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora_inicio" TIMESTAMP(3) NOT NULL,
    "hora_fin" TIMESTAMP(3) NOT NULL,
    "tipo_operacion" INTEGER NOT NULL,
    "id_operacion" INTEGER NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operacion" (
    "id" SERIAL NOT NULL,
    "tipo_operacion" INTEGER NOT NULL,
    "nombre_proceso" TEXT NOT NULL,
    "cant_total_componentes_soldados" INTEGER NOT NULL,
    "programa_utilizado" TEXT NOT NULL,
    "cantidad_placas_fallas" INTEGER NOT NULL,
    "cantidad_placas" INTEGER NOT NULL,
    "comentarios" TEXT NOT NULL,
    "equipos" TEXT NOT NULL,
    "programa_impresora" TEXT NOT NULL,
    "codigo_estano" TEXT NOT NULL,
    "perfil_horno" TEXT NOT NULL,
    "soldadora_ola" TEXT NOT NULL,
    "programa_ola" TEXT NOT NULL,
    "horno_refusion" TEXT NOT NULL,

    CONSTRAINT "Operacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orden_Produccion" (
    "id" SERIAL NOT NULL,
    "fecha_orden" TIMESTAMP(3) NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "observaciones" TEXT NOT NULL,

    CONSTRAINT "Orden_Produccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "codigo_productos" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "comp_smd_bot" INTEGER NOT NULL,
    "var_smd_bot" INTEGER NOT NULL,
    "comp_smd_top" INTEGER NOT NULL,
    "var_smd_top" INTEGER NOT NULL,
    "var_bot_top" INTEGER NOT NULL,
    "comp_tht_bot" INTEGER NOT NULL,
    "comp_tht_top" INTEGER NOT NULL,
    "ptos_sold_man_smd" INTEGER NOT NULL,
    "ptos_sold_man_tht" INTEGER NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_Operacion" (
    "id" SERIAL NOT NULL,
    "tipo_operacion" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Tipo_Operacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_operacion_fkey" FOREIGN KEY ("id_operacion") REFERENCES "Operacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_orden_produccion_fkey" FOREIGN KEY ("id_orden_produccion") REFERENCES "Orden_Produccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operacion" ADD CONSTRAINT "Operacion_tipo_operacion_fkey" FOREIGN KEY ("tipo_operacion") REFERENCES "Tipo_Operacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orden_Produccion" ADD CONSTRAINT "Orden_Produccion_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;