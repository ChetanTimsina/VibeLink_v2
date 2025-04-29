-- CreateTable
CREATE TABLE "VibeUserTable" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "VibeUserTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VibeUserTable_username_key" ON "VibeUserTable"("username");

-- CreateIndex
CREATE UNIQUE INDEX "VibeUserTable_email_key" ON "VibeUserTable"("email");
