-- AlterTable
ALTER TABLE `quiz` ADD COLUMN `isOnline` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `score` ADD COLUMN `quizId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Score` ADD CONSTRAINT `Score_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quiz`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
