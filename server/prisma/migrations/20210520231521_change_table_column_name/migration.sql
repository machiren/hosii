/*
  Warnings:

  - You are about to drop the column `userId` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `articleId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `articleId` on the `wants` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `wants` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `article_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `article_id` to the `wants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `wants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `articles` DROP FOREIGN KEY `articles_ibfk_1`;

-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_ibfk_1`;

-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_ibfk_2`;

-- DropForeignKey
ALTER TABLE `wants` DROP FOREIGN KEY `wants_ibfk_1`;

-- DropForeignKey
ALTER TABLE `wants` DROP FOREIGN KEY `wants_ibfk_2`;

-- AlterTable
ALTER TABLE `articles` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `comments` DROP COLUMN `articleId`,
    DROP COLUMN `userId`,
    ADD COLUMN `article_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `wants` DROP COLUMN `articleId`,
    DROP COLUMN `userId`,
    ADD COLUMN `article_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `articles` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD FOREIGN KEY (`article_id`) REFERENCES `articles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `wants` ADD FOREIGN KEY (`article_id`) REFERENCES `articles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `wants` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
