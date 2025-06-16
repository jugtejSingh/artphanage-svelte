<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Price from './Price.svelte';

	const { Story } = defineMeta({
		title: 'Atoms/Price',
		component: Price,
		tags: ['autodocs'],
	});
</script>

<Story name="Price1" args={{price: 200 , currency:'USD'}} />

