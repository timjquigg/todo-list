-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
