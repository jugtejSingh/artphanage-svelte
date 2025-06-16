import { json } from '@sveltejs/kit';
import Stripe from 'stripe';
import { STRIPE_API_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_API_KEY);

export async function POST({ request }) {
	const { products, mode } = await request.json();
	const parsedProducts = JSON.parse(products);
	console.log(parsedProducts);
	const lineItems: object[] = [];
	for (let i = 0; i < parsedProducts.length; i++) {
		lineItems.push({
			price: parsedProducts[i].priceId,
			quantity: 1
		});
	}
	// @ts-ignore
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items: lineItems,
		mode,
		shipping_address_collection: {
			allowed_countries: ['US', 'CA', 'UK', 'IN', 'AU']
		},
		automatic_tax: {
			enabled: true
		},
		ui_mode: 'embedded',
		return_url: 'https://localhost:3000/checkout/success'
	});
	return json({ sessionId: session.id });
}
