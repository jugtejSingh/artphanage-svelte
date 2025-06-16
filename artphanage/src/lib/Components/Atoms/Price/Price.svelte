<script lang="ts">
	interface Props {
		price: number,
		currency: string
	}
	let {price, currency} :Props = $props()
		let newPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: currency}).format(
			price,
		)
	console.log(newPrice)
</script>
		<p>{newPrice}</p>
<style>
	p{
		font-size: var(--fontSize, 2rem);
	}
</style>