<script>
	import Price from '$lib/Components/Atoms/Price/Price.svelte';

	let {shippingDetail} = $props()
</script>
<div class="ShippingOption">
	<span>Hello</span>
	<Price price={shippingDetail.ratedShipmentDetails[0].totalNetCharge} currency={shippingDetail.ratedShipmentDetails[0].currency} --fontSize="1rem" />
</div>

<style></style>