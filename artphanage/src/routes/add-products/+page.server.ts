import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import prisma from '$lib/DatabaseClient/db';
import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { S3_ACCESS_KEY, S3_ENDPOINT, S3_REGION, S3_SECRET_KEY } from '$env/static/private';
import Stripe from 'stripe';
import { STRIPE_API_KEY } from '$env/static/private';
import { Currency } from '@prisma/client';

const stripe = new Stripe(STRIPE_API_KEY);

const schema = z.object({
	artName: z.string(),
	description: z.string(),
	price: z.number(),
	frame: z.enum(['Yes', 'No']).default('No'),
	size: z.string(),
	image: z.instanceof(File).array(),
	childName: z.string()
});
const s3Client = new S3Client({
	forcePathStyle: true,
	region: S3_REGION,
	endpoint: S3_ENDPOINT,
	credentials: {
		accessKeyId: S3_ACCESS_KEY,
		secretAccessKey: S3_SECRET_KEY
	}
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));
		if (!form.valid) {
			return fail(400, { issueWithForm: true });
		}
		const myUUID: string = uuidv4();
		const imageURL: string[] = [];
		for (let i = 0; i < form.data.image.length; i++) {
			const arrayBuffer = await form.data.image[i].arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);
			const uploadCommand = new PutObjectCommand({
				Bucket: 'artphanage-images',
				Key: myUUID + '/' + i.toString(),
				Body: buffer,
				ContentType: form.data.image[i].type
			});
			const checking = await s3Client.send(uploadCommand);
			if (!checking.ETag) {
				return fail(400, { imageNotUploaded: true });
			}
			imageURL.push(
				'https://acjigbgweafgjrvhtzbc.supabase.co/storage/v1/object/public/artphanage-images/' +
					myUUID +
					'/' +
					i.toString()
			);
		}
		const product = await stripe.products.create({
			id: myUUID,
			name: form.data.artName,
			images: imageURL,
			default_price_data: {
				unit_amount: form.data.price * 100,
				currency: 'USD'
			}
		});
		try {
			await prisma.painting.create({
				data: {
					artName: form.data.artName,
					description: form.data.description,
					price: form.data.price,
					// @ts-ignore
					priceId: product.default_price,
					frame: form.data.frame,
					slug: myUUID,
					imageName: imageURL,
					sold: 'No',
					orphanage: 'Delhi Institute of orphans',
					location: 'New Delhi, India',
					size: form.data.size,
					childName: form.data.childName,
					currency: Currency.USD,
					orderId: undefined,
					organizationId: undefined
				}
			});
		} catch (e) {
			// @ts-ignore
		}

		// Return the form with a status message
		return message(form, 'Form posted successfully!');
	}
};
