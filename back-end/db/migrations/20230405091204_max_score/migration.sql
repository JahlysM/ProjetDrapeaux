/*
  Warnings:

  - Added the required column `maxScore` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `score` ADD COLUMN `maxScore` INTEGER NOT NULL;
