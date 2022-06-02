import type { Place } from '$lib/types/listing';
import { REVIEWS } from './reviews';

export const PLACES: Place[] = [
	{
		id: 354121,
		title: 'Grand Hotel Vesuvio',
		subtitle: 'Beachside Resort',
		desc: 'Incredible Sea Views, 3 different Pools, Newly renovated rooms.',
		rating: 4.9,
		ratingTotal: 120,
		total: 150,
		subtotal: 181,
		imgSrc: '/images/global/galleria_umberto.png',
		listingStatus: 'listed',
		coords: [27.717245, 85.323959],
		address: {
			state: 'Florida',
			city: 'Longwood',
			street: '1020 Waverly Dr.',
			zip: '32750'
		},
		rooms: [
			{
				id: 5123123,
				name: '3B King superior Room',
				beds: [
					{ count: 2, type: 'king' },
					{ count: 1, type: 'queen' },
					{ count: 1, type: 'twin' }
				],
				price: 282,
				quantity: 1,
				images: '/images/global/galleria_umberto.png',
				roomType: 'suite',
				stock: 4
			},
			{
				id: 321313,
				name: 'One bedroom Suite',
				beds: [{ count: 1, type: 'king' }],
				price: 132,
				quantity: 3,
				images: '/images/global/galleria_umberto.png',
				roomType: 'suite',
				stock: 4
			},
			{
				id: 39278137,
				name: '2b Jr Suite',
				beds: [{ count: 2, type: 'king' }],
				price: 150,
				quantity: 1,
				images: '/images/global/galleria_umberto.png',
				roomType: 'suite',
				stock: 4
			}
		],
		review: REVIEWS
	},
	{
		id: 512312,
		title: 'Candel light sparrow',
		subtitle: 'Beachside Resort',
		desc: 'Incredible Sea Views, 3 different Pools, Newly renovated rooms.',
		rating: 4.9,
		ratingTotal: 120,
		total: 200,
		subtotal: 181,
		coords: [27.742245, 85.343959],
		imgSrc: '/images/global/cappella.png',
		listingStatus: 'unlisted',
		address: {
			state: 'Florida',
			city: 'Longwood',
			street: '1020 Waverly Dr.',
			zip: '32750'
		},
		rooms: [
			{
				id: 5123123,
				name: '3B King superior Room',
				beds: [
					{ count: 2, type: 'king' },
					{ count: 1, type: 'queen' },
					{ count: 3, type: 'twin' }
				],
				price: 282,
				quantity: 1,
				images: '/images/global/galleria_umberto.png',
				roomType: 'suite',
				stock: 4
			},
			{
				id: 52123132,
				name: 'One bedroom Suite',
				beds: [{ count: 1, type: 'king' }],
				price: 132,
				quantity: 3,
				images: '/images/global/galleria_umberto.png',
				roomType: 'suite',
				stock: 4
			},
			{
				id: 8547432,
				name: '2b Jr Suite',
				beds: [{ count: 2, type: 'king' }],
				price: 150,
				quantity: 1,
				images: '/images/global/galleria_umberto.png',
				roomType: 'suite',
				stock: 4
			}
		],
		review: REVIEWS
	},
	{
		id: 8252543,
		title: 'Lorem ipsum monosu mesudno',
		subtitle: 'Beachside Resort',
		desc: 'Incredible Sea Views, 3 different Pools, Newly renovated rooms.',
		rating: 4.9,
		ratingTotal: 120,
		total: 84,
		subtotal: 181,
		coords: [27.797245, 85.253959],
		imgSrc: '/images/global/castel_ovo.png',
		address: {
			state: 'Florida',
			city: 'Longwood',
			street: '1020 Waverly Dr.',
			zip: '32750'
		},
		rooms: [
			{
				id: 92524234,
				name: '3B King superior Room',
				beds: [
					{ count: 2, type: 'king' },
					{ count: 1, type: 'queen' }
				],
				price: 282,
				quantity: 1,
				images: '/images/global/galleria_umberto.png',
				roomType: 'suite',
				stock: 4
			},
			{
				id: 825423424,
				name: 'One bedroom Suite',
				beds: [{ count: 1, type: 'king' }],
				price: 132,
				quantity: 3,
				images: '/images/global/galleria_umberto.png',
				roomType: 'suite',
				stock: 4
			},
			{
				id: 72423452,
				name: '2b Jr Suite',
				beds: [{ count: 2, type: 'king' }],
				price: 150,
				quantity: 1,
				images: '/images/global/galleria_umberto.png',
				roomType: 'suite',
				stock: 4
			}
		]
	}
];
