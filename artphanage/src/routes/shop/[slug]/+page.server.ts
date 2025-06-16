import prisma from '$lib/DatabaseClient/db.js';
import type { painting } from '@prisma/client';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const product: painting | null = await prisma.painting.findUnique({
		where: { slug: params.slug }
	});
	if (!product) {
		throw error(404, 'Not Found'); // Use SvelteKit's error helper for 404 pages
	}
	return product;
}
