import { pgTable, text, integer } from 'drizzle-orm/pg-core';

export const catalogProducts = pgTable('catalog_products', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  category: text('category').notNull(),
  price: integer('price').notNull(),
  unit: text('unit').notNull(),
  stock: integer('stock').notNull(),
  location: text('location').notNull(),
  description: text('description').notNull(),
  farmerName: text('farmer_name').notNull(),
});
