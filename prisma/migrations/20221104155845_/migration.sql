-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "edad" INTEGER DEFAULT 28,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tarea" (
    "id" SERIAL NOT NULL,
    "marca_temporal" TIMESTAMP(3),
    "nombre_colaborador" TEXT,
    "id_orden_produccion" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3),
    "hora_inicio" TIMESTAMP(3),
    "hora_fin" TIMESTAMP(3),
    "id_operacion" INTEGER NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operacion" (
    "id" SERIAL NOT NULL,
    "tipo_operacion" INTEGER NOT NULL,
    "nombre_proceso" TEXT,
    "cant_total_componentes_soldados" INTEGER,
    "programa_utilizado" TEXT,
    "cantidad_placas_fallas" INTEGER,
    "cantidad_placas" INTEGER,
    "comentarios" TEXT,
    "equipos" TEXT,
    "programa_impresora" TEXT,
    "codigo_estano" TEXT,
    "perfil_horno" TEXT,
    "soldadora_ola" TEXT,
    "programa_ola" TEXT,
    "horno_refusion" TEXT,

    CONSTRAINT "Operacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orden_Produccion" (
    "id" SERIAL NOT NULL,
    "numero_orden" INTEGER NOT NULL,
    "fecha_orden" TIMESTAMP(3),
    "id_producto" TEXT NOT NULL,
    "descripcion" TEXT,
    "cantidad" INTEGER,
    "observaciones" TEXT,

    CONSTRAINT "Orden_Produccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "codigo_productos" TEXT NOT NULL,
    "descripcion" TEXT,
    "comp_smd_bot" INTEGER,
    "var_smd_bot" INTEGER,
    "comp_smd_top" INTEGER,
    "var_smd_top" INTEGER,
    "var_bot_top" INTEGER,
    "comp_tht_bot" INTEGER,
    "comp_tht_top" INTEGER,
    "ptos_sold_man_smd" INTEGER,
    "ptos_sold_man_tht" INTEGER,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_Operacion" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Tipo_Operacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Orden_Produccion_numero_orden_key" ON "Orden_Produccion"("numero_orden");

-- CreateIndex
CREATE UNIQUE INDEX "Producto_codigo_productos_key" ON "Producto"("codigo_productos");

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_operacion_fkey" FOREIGN KEY ("id_operacion") REFERENCES "Operacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_orden_produccion_fkey" FOREIGN KEY ("id_orden_produccion") REFERENCES "Orden_Produccion"("numero_orden") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operacion" ADD CONSTRAINT "Operacion_tipo_operacion_fkey" FOREIGN KEY ("tipo_operacion") REFERENCES "Tipo_Operacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orden_Produccion" ADD CONSTRAINT "Orden_Produccion_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Producto"("codigo_productos") ON DELETE RESTRICT ON UPDATE CASCADE;
