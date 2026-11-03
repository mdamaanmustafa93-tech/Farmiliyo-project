CREATE TABLE "catalog_products" (
	"id" text PRIMARY KEY,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"price" integer NOT NULL,
	"unit" text NOT NULL,
	"stock" integer NOT NULL,
	"location" text NOT NULL,
	"description" text NOT NULL,
	"farmer_name" text NOT NULL
);
