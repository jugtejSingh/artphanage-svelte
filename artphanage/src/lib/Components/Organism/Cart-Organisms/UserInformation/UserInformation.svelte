<script>
	import Input from '$lib/Components/Molecules/Input/Input.svelte';
	let { form, errors } = $props();
</script>

<h3 class="UserInformation__heading">User Information</h3>
<div class="UserInformation__Inputs">
	<Input
		labelFor="email"
		labelText="Email"
		typeOfInput="email"
		required={true}
		bind:value={$form.email}
		error={$errors.email}
		autocomplete="email"
	/>
	<div class="flex">
		<Input
			labelFor="givenName"
			labelText="Given Name"
			typeOfInput="text"
			required={true}
			bind:value={$form.givenName}
			error={$errors.givenName}
			autocomplete="given-name"
		/>
		<Input
			labelFor="familyName"
			labelText="Family Name"
			typeOfInput="text"
			required={true}
			bind:value={$form.familyName}
			error={$errors.familyName}
			autocomplete="family-name"
		/>
	</div>
	<Input
		labelFor="phoneNumber"
		labelText="Phone Number with Country Code"
		typeOfInput="text"
		required={true}
		bind:value={$form.phoneNumber}
		error={$errors.phoneNumber}
		autocomplete="tel"
	/>
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
