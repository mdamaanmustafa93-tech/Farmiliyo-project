import { drizzle } from 'drizzle-orm/netlify-db';
import { asc } from 'drizzle-orm';
import { catalogProducts } from '../../db/schema.js';

export default async (request: Request) => {
  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET' } });
  }
  try {
    const db = drizzle();
    const products = await db.select().from(catalogProducts).orderBy(asc(catalogProducts.id));
    return Response.json(products.map(product => ({
      ...product,
      farmerId: 'seed-' + product.farmerName.toLowerCase().replace(/\W+/g, '-'),
      image: '',
      createdAt: Date.UTC(2026, 10, 3) - Number(product.id.slice(1)) * 60000,
    })));
  } catch {
    return Response.json({ error: 'The extended catalog is temporarily unavailable.' }, { status: 503 });
  }
};

export const config = { path: '/api/catalog' };
