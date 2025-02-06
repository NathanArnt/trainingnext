/*
  Warnings:

  - You are about to drop the `Commandes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CommandesToProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_CommandesToProducts` DROP FOREIGN KEY `_CommandesToProducts_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CommandesToProducts` DROP FOREIGN KEY `_CommandesToProducts_B_fkey`;

-- DropTable
DROP TABLE `Commandes`;

-- DropTable
DROP TABLE `_CommandesToProducts`;

-- CreateTable
CREATE TABLE `Orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalPrice` DOUBLE NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `products` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
