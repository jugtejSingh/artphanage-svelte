<script lang="ts">
	import type { painting } from '@prisma/client';
	import Button from '$lib/Components/Atoms/Button/Button.svelte';
	import Price from '$lib/Components/Atoms/Price/Price.svelte';

	let { cart }: { cart: painting[] } = $props();
	console.log(cart);
	function handleClick(slug: string): never {
		cart = cart.filter((item) => item.slug !== slug);
		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	}

</script>
	<h2 class="Cart__heading">Order Summary</h2>
	<div class="Cart__item">
		{#each Object.values(cart) as item}
			<div class="Cart__singleItem">
				<img src={item?.imageName[0]} alt="" class="Cart__image" />
				<div class="Cart__nameAndInfo">
					<h3 class="Cart__singleItemName">{item.artName}</h3>
					<div class="Cart__metadata">
						<h5>Size:</h5>
						<h5>{item.size}</h5>
					</div>
					<div class="Cart__metadata">
						<h5>Frame:</h5>
						<h5>{item.frame}</h5>
					</div>
				</div>
				<div class="Cart__priceAndRemove">
					<Button
						variant="ghost"
						type="button"
						flex="row"
						--width="2rem"
						--height="0"
						--padding="0"
						onclick={() => handleClick(item.slug)}
					>
						<img src="/close.svg" alt="Remove Item" class="Cart__close" />
					</Button>
					<Price currency="USD" price={item.price} --fontSize="1rem" >${item.price}</Price>
				</div>
			</div>
		{/each}
	</div>

<style>
	.Cart__item {
		margin-left: auto;
		margin-right: auto;
		padding-left: 2%;
		padding-right: 2%;
		width: 20rem;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
	}
	.Cart__image {
		margin: 0;
		height: 100%;
		object-fit: contain;
		width: 20%;
	}
	.Cart__close {
		width: 0.7rem;
	}
	.Cart__singleItem {
		margin-top: 2%;
		width: 100%;
		height: 60%;
		display: flex;
		font-size: 0.9rem;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}
	.Cart__priceAndRemove {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3.5rem;
	}
	.Cart__nameAndInfo{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.Cart__metadata {
		display: flex;
		flex-direction: row;
		font-size: 0.8rem;
	}
	.Cart__singleItemName{
		font-size: 1.2rem;
	}
	.Cart__heading{
		text-align: center;
		padding: 1%;
		font-size: 1.5rem;
	}
</style>
