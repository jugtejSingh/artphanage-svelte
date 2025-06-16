import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { SHIPPING_API_CLIENT, SHIPPING_API_SECRET } from '$env/static/private';

let oauthAccessKey: {
	accessKey: string;
	ExpiryTime: number;
} = {
	accessKey: '',
	ExpiryTime: Date.now()
};
console.log(oauthAccessKey);
export const ssr = false;

const schema = z.object({
	// givenName: z.string(),
	// familyName: z.string(),
	// email: z.string(),
	// phoneNumber: z.string(),
	// address: z.string(),
	// address2: z.string(),
	// city: z.string(),
	// postalCode: z.string(),
	// state: z.string(),
	// country: z.string()
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));
		if (!form.valid) {
			return fail(400, { issueWithForm: true });
		}
		// const returnedData = await fetch(
		// 	`https://addressvalidation.googleapis.com/v1:validateAddress?key=${ADDRESS_VALIDATOR}`,
		// 	{
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			address: {
		// 				addressLines: [
		// 					form.data.address,
		// 					form.data.city,
		// 					form.data.state,
		// 					form.data.country,
		// 					form.data.postalCode
		// 				]
		// 			},
		// 			previousResponseId: null,
		// 			enableUspsCass: false
		// 		})
		// 	}
		// );
		// const validatedAddress = await returnedData.json();
		// console.log(validatedAddress.result.address.addressComponents);
		async function getAccessToken() {
			if (oauthAccessKey.ExpiryTime > Date.now() && oauthAccessKey.accessKey !== '') {
				console.log('1');
				console.log(oauthAccessKey.accessKey);
				return oauthAccessKey.accessKey;
			} else {
				const returnedAuth = await fetch('https://apis-sandbox.fedex.com/oauth/token', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					body: new URLSearchParams({
						grant_type: 'client_credentials',
						client_id: SHIPPING_API_CLIENT,
						client_secret: SHIPPING_API_SECRET
					})
				});
				const returnedAuthObject = await returnedAuth.json();
				oauthAccessKey = {
					accessKey: returnedAuthObject.access_token,
					ExpiryTime: Date.now() + returnedAuthObject.expires_in * 1000
				};
				console.log('2');
				console.log(oauthAccessKey.accessKey);
				return oauthAccessKey.accessKey;
			}
		}

		const returnedRates = await fetch('https://apis-sandbox.fedex.com/rate/v1/rates/quotes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${await getAccessToken()}`
			},
			body: JSON.stringify({
				accountNumber: {
					value: '740561073'
				},
				requestedShipment: {
					shipper: {
						address: {
							streetLines: ['W-6c, House No.3', 'Sainik Farms'],
							city: 'Delhi',
							postalCode: '110062',
							countryCode: 'IN',
							residential: true
						}
					},
					recipient: {
						address: {
							streetLines: ['10 Leazes Terrace'],
							city: 'Newcastle',
							postalCode: 'NE1 4LY',
							countryCode: 'GB',
							residential: true
						}
					},
					rateRequestType: ['LIST', 'PREFERRED'],
					pickupType: 'CONTACT_FEDEX_TO_SCHEDULE',
					requestedPackageLineItems: [
						{
							subPackagingType: 'BOX',
							groupPackageCount: 1,
							declaredValue: {
								amount: 40,
								currency: 'USD'
							},
							weight: {
								units: 'KG',
								value: '0.3'
							},
							dimensions: {
								length: '20',
								width: '5',
								height: '10',
								units: 'CM'
							}
						}
					]
				}
			})
		});
		return { form, data: await returnedRates.json() };
	}
};
