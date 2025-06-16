<script lang="ts">
	import Price from '$lib/Components/Atoms/Price/Price.svelte';

	interface Props {
		product: object
	}
	let {product} = $props()
</script>
<section class="ProductCard">
		<img src={product.imageURL[0]} alt="product"  class="ProductCard__image" />
		<Price price={product.price} currency={'USD'} />
</section>
<style>
	.ProductCard {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 25rem;
		max-height: 25rem;
	}
	.ProductCard__image {
		object-fit: contain;
		aspect-ratio: inherit;
		width: 100%;
	}
</style>