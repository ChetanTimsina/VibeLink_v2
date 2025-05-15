-- CreateTable
CREATE TABLE "FriendList" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "friendId" INTEGER NOT NULL,

    CONSTRAINT "FriendList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FriendList_userId_friendId_key" ON "FriendList"("userId", "friendId");

-- AddForeignKey
ALTER TABLE "FriendList" ADD CONSTRAINT "FriendList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "VibeUserTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendList" ADD CONSTRAINT "FriendList_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "VibeUserTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
