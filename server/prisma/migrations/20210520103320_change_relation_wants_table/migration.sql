/*
  Warnings:

  - You are about to drop the column `articlesId` on the `wants` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `wants` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `wants` DROP FOREIGN KEY `wants_ibfk_1`;

-- DropForeignKey
ALTER TABLE `wants` DROP FOREIGN KEY `wants_ibfk_2`;

-- AlterTable
ALTER TABLE `wants` DROP COLUMN `articlesId`,
    DROP COLUMN `usersId`;

-- AddForeignKey
ALTER TABLE `wants` ADD FOREIGN KEY (`articleId`) REFERENCES `articles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `wants` ADD FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
