-- DropForeignKey
ALTER TABLE "FriendList" DROP CONSTRAINT "FriendList_friendId_fkey";

-- DropForeignKey
ALTER TABLE "FriendList" DROP CONSTRAINT "FriendList_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AddForeignKey
ALTER TABLE "FriendList" ADD CONSTRAINT "FriendList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "VibeUserTable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendList" ADD CONSTRAINT "FriendList_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "VibeUserTable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "VibeUserTable"("id") ON DELETE CASCADE ON UPDATE CASCADE;
