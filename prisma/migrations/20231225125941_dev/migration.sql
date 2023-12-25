-- CreateTable
CREATE TABLE "Points" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "point" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Points_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Points_user_id_key" ON "Points"("user_id");
