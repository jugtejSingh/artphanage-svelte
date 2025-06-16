<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ProductCardContent from './ProductCardContent.svelte';

	const { Story } = defineMeta({
		title: 'Organism/ProductCardContent',
		component: ProductCardContent,
		tags: ['autodocs'],
	});
</script>

<Story name="ProductCardContent2" args={{data:{artName:"Random Painting", description:"This is a painting from uganda",price:200, childName:"Max", orphanage:"Newcastle",location:"Location", frame:"No",size:"10x20x30"}}}/>

