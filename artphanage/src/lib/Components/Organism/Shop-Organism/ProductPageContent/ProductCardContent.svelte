<script lang="ts">
	import Price from '$lib/Components/Atoms/Price/Price.svelte';
	import Button from '$lib/Components/Atoms/Button/Button.svelte';

	let { data} = $props();
	function handleClick(data : string) {
		let cart = JSON.parse(localStorage.getItem('cart')) || [];
		let InCart = false;
		for (let i = 0; i < cart.length; i++) {
			if (cart[i].slug === data.slug) {
				InCart = true;
			}
		}
			if (InCart === false) {
				cart.push(data)
				let jsonString = JSON.stringify(cart);
				localStorage.setItem('cart', jsonString);
			}
		}
	console.log(data);
</script>
{#snippet additionalInformation(headerName, innerInformation)}
	<div class="AdditionalInformation">
		<dt class="AdditionalInformation__header">{headerName}:</dt>
		<dd class="AdditionalInformation__inner">{innerInformation}</dd>
	</div>
{/snippet}

<section class="ProductContent">
	<h2 class="ProductContent__heading">{data.artName}</h2>
	<p>{data.description}</p>
	<div>
		<div class="ProductContent__priceAndButton">
			<Price price={parseInt(data.price)} currency="USD"/>
			<Button variant="primary" onclick={() => handleClick(data)} type="button" --width="20%" --height="1%" --padding="3%" --fontSize="1.2rem">
				Add to cart
			</Button>
		</div>
			<h3>Additional Information</h3>
		<dl class="ProductContent__additionalInformation">
			{@render additionalInformation("Artist Name",data.childName)}
			{@render additionalInformation("Orphanage",data.orphanage)}
			{@render additionalInformation("Location",data.location)}
			{@render additionalInformation("With a frame?",data.frame)}
			{@render additionalInformation("Size",data.size)}
		</dl>
	</div>
</section>

<style>
	.ProductContent {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.ProductContent__priceAndButton{
		display: flex;
		flex-direction: row;
		gap: 4rem;
		align-items: center;
	}
	.ProductContent__additionalInformation{
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.AdditionalInformation{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 70%;
	}
	.ProductContent__heading{
		font-size: 2rem;
	}
	:global(.bigImageAnimation) {
		animation: cart 1s ease-in backwards;
	}
	@keyframes cart {
		0%{
			transform: translate(0,0) scale(1);
		}
		100%{
			transform: translate(130%,-70%) scale(0.2);
		}
	}
</style>
