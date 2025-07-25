-- CreateTable
CREATE TABLE "Carros" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "NumeroPlacas" TEXT NOT NULL,

    CONSTRAINT "Carros_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carros_NumeroPlacas_key" ON "Carros"("NumeroPlacas");
