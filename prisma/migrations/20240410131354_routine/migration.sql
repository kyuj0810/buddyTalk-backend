/*
  Warnings:

  - Made the column `userId` on table `Routine` required. This step will fail if there are existing NULL values in that column.
  - Made the column `routineId` on table `UserRoutine` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Routine" DROP CONSTRAINT "Routine_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserRoutine" DROP CONSTRAINT "UserRoutine_routineId_fkey";

-- AlterTable
ALTER TABLE "Routine" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "UserRoutine" ALTER COLUMN "routineId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "UserRoutine" ADD CONSTRAINT "UserRoutine_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Routine" ADD CONSTRAINT "Routine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
