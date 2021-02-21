CREATE TABLE "financialMovement" (
  "id" SERIAL PRIMARY KEY,
  "description" text NOT NULL,
  "value" int NOT NULL,
  "date" timestamp NOT NULL,
  "created_at" timestamp DEFAULT (now())
);
