-- CreateTable
CREATE TABLE "highlightsPhotos" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "highlightId" TEXT NOT NULL,

    CONSTRAINT "highlightsPhotos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "highlightsPhotos" ADD CONSTRAINT "highlightsPhotos_highlightId_fkey" FOREIGN KEY ("highlightId") REFERENCES "highlights"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
