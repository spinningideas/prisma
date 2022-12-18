-- CreateTable
CREATE TABLE "continent" (
    "continent_id" UUID NOT NULL,
    "continent_code" VARCHAR(2),
    "continent_name" VARCHAR(50),

    CONSTRAINT "continent_pkey" PRIMARY KEY ("continent_id")
);

-- CreateTable
CREATE TABLE "country" (
    "country_id" UUID NOT NULL,
    "country_name" VARCHAR(100),
    "country_code" VARCHAR(2),
    "country_code3" VARCHAR(3),
    "capital" VARCHAR(100),
    "continent_code" VARCHAR(2),
    "area" INTEGER,
    "population" INTEGER,
    "latitude" DECIMAL(10,6),
    "longitude" DECIMAL(10,6),
    "currency_code" VARCHAR(3),
    "currency_name" VARCHAR(50),
    "languages" VARCHAR(255),

    CONSTRAINT "country_pkey" PRIMARY KEY ("country_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "continent_continent_code_key" ON "continent"("continent_code");

-- CreateIndex
CREATE UNIQUE INDEX "continent_continent_name_key" ON "continent"("continent_name");

-- CreateIndex
CREATE UNIQUE INDEX "country_country_name_key" ON "country"("country_name");
