<script>
	import Input from '$lib/Components/Molecules/Input/Input.svelte';
	import { countryCodes } from '../../../../../utils/CountryCodes/countryCodes.js';
	let { form, errors } = $props();
</script>

<h3 class="UserInformation__heading">Shipping Address</h3>
<div class="UserInformation__Inputs">
	<Input
		labelFor="address"
		labelText="Address"
		typeOfInput="text"
		required={true}
		bind:value={$form.address}
		error={$errors.address}
		autocomplete="address-level3"
	/>
	<Input
		labelFor="address2"
		labelText="Address Line 2"
		typeOfInput="text"
		required={false}
		bind:value={$form.address2}
		error={$errors.address2}
		autocomplete="shipping address-level2"
	/>
	<div class="flex">
		<Input
			labelFor="city"
			labelText="City"
			typeOfInput="text"
			required={true}
			bind:value={$form.city}
			error={$errors.city}
			autocomplete="shipping address-level1"
		/>
		<Input
			labelFor="state"
			labelText="State/County/Parish/Province"
			typeOfInput="text"
			required={true}
			bind:value={$form.state}
			error={$errors.state}
		/>
	</div>
	<div class="flex">
		<select>
			{#each countryCodes as item}
				<option value={item.alpha2Code}>{item.englishShortName}</option>
				{/each}
		</select>
		<Input
			labelFor="postalCode"
			labelText="Postal Code/Zip Code"
			typeOfInput="text"
			required={true}
			bind:value={$form.postalCode}
			error={$errors.postalCode}
		/>
	</div>
</div>

<style>
	.UserInformation__heading {
		text-align: center;
		font-size: 1.5rem;
	}
	.UserInformation__Inputs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.flex {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>
