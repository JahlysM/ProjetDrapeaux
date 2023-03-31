/*
  Warnings:

  - Added the required column `goodAnswer` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `question` ADD COLUMN `goodAnswer` INTEGER NOT NULL;
