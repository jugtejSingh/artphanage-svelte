<script lang="ts">
	import Navbar from '$lib/Components/Organism/Homepage-Organisms/Navbar/Navbar.svelte';
	import CartItems from '$lib/Components/Organism/Cart-Organisms/CartItems/CartItems.svelte';
	import CartPrice from '$lib/Components/Organism/Cart-Organisms/CartPrice/CartPrice.svelte';
	import EmptyCart from '$lib/Components/Organism/Cart-Organisms/EmptyCart/EmptyCart.svelte';
	import UserInformation from '$lib/Components/Organism/Cart-Organisms/UserInformation/UserInformation.svelte';
	import Address from '$lib/Components/Organism/Cart-Organisms/Address/Address.svelte';
	import { superForm } from 'sveltekit-superforms';
	import Button from '$lib/Components/Atoms/Button/Button.svelte';
	import ShippingOption from '$lib/Components/Molecules/ShippingOption/ShippingOption.svelte';
	let cart = localStorage.getItem('cart') ;
	let parsedCart = []
	if (cart){
		 parsedCart = JSON.parse(cart);
	}

	let {data, form: formData} = $props();
	let { form , errors, enhance } = superForm(data.form);
</script>

<Navbar />
{#if parsedCart.length === 0}
	<EmptyCart />
{:else}
	<form class="CartPage" method="POST" use:enhance>
		<div class="CartPage__left">
			<div class="Cart">
				<UserInformation form={form} errors={errors}/>
			</div>
			<div class="Cart">
				<Address form={form} errors={errors} />
			</div>
			{#each formData?.data.output.rateReplyDetails as item, index}
				<ShippingOption shippingDetail={item} key={index} />
			{/each}
			<Button variant="primary" type="submit" --width="50%" --height="3rem"><span>Checkout</span></Button>
		</div>
		<div>
			<CartItems cart={parsedCart} />
			<CartPrice cart={parsedCart} />
		</div>
	</form>
{/if}

<style>
	.CartPage {
		margin-top: 2rem;
		gap: 3rem;
		display: flex;
		margin-left: 24%;
		flex-direction: row;
	}
	.CartPage__left {
		display: flex;
		flex-direction: column;
	}
	.Cart {
		width: 35rem;
		height: 16rem;
		margin-bottom: 3rem;
	}
</style>
