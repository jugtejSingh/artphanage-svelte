<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ProductCard from './ProductCard.svelte';

	const { Story } = defineMeta({
		title: 'Atoms/ProductCard',
		component: ProductCard,
		tags: ['autodocs'],
	});
</script>

<Story name="ProductCard1" args={{price: 200 , currency:'USD'}} />

