/*
  Warnings:

  - The values [MUITO_BEM,BEM,MAL,MUITO_MAL] on the enum `HumorTipo` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "HumorTipo_new" AS ENUM ('OTIMO', 'BOM', 'NEUTRO', 'RUIM', 'PESSIMO');
ALTER TABLE "checkin_emocional" ALTER COLUMN "humor" TYPE "HumorTipo_new" USING ("humor"::text::"HumorTipo_new");
ALTER TYPE "HumorTipo" RENAME TO "HumorTipo_old";
ALTER TYPE "HumorTipo_new" RENAME TO "HumorTipo";
DROP TYPE "public"."HumorTipo_old";
COMMIT;
