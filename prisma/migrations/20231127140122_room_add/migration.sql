-- CreateTable
CREATE TABLE "Room" (
    "roomId" SERIAL NOT NULL,
    "createdId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("roomId")
);
