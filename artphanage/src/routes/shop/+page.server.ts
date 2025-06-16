import prisma from '$lib/DatabaseClient/db.js';
import type { painting } from '@prisma/client';

export async function load() {
	const products: painting[] = await prisma.painting.findMany();
	return {
		products: products
	};
}
