-- AlterTable
ALTER TABLE "VibeUserTable" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userImage" BYTEA;

-- CreateTable
CREATE TABLE "Post" (
    "postid" SERIAL NOT NULL,
    "postTitle" TEXT NOT NULL,
    "postDescription" TEXT NOT NULL,
    "postImage" BYTEA NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postLikes" INTEGER NOT NULL DEFAULT 0,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postid")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "VibeUserTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
