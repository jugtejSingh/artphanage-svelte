<script>
	import Price from '$lib/Components/Atoms/Price/Price.svelte';

	let { cart } = $props();
</script>

<div class="Price">
	<div class="Price__section">
		<h4 class="Price__itemName">Subtotal</h4>
		<span><Price price={102} currency="USD" --fontSize="1.3rem" /></span>
	</div>
	<div class="Price__section">
		<h4 class="Price__itemName">Shipping</h4>
		<span><Price price={0} currency="USD" --fontSize="1.3rem" /></span>
	</div>
	<div class="Price__section">
		<h4 class="Price__itemName">Total</h4>
		<span><Price price={102} currency="USD" --fontSize="1.1rem" /></span>
	</div>
</div>

<style>
	.Price {
		margin: 1rem;
		padding: 1rem;
		border-top: 1px solid black;
		width: 23rem;
		height: 20rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.Price__itemName {
		font-size: 1.2rem;
	}
	.Price__section{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	</style>
