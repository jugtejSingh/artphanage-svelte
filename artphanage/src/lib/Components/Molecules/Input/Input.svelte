<script lang="ts">

	let {
		labelFor,
		labelText,
		typeOfInput,
		source,
		error,
		value = $bindable(),
		required,
		autocomplete
	}: {
		labelFor: string;
		labelText: string;
		typeOfInput: string;
		source?: string;
		error?: string[];
		required?: boolean;
		value: string | number;
		autocomplete? : AutoFill
	} = $props();
</script>

	<label for={labelFor} class="Input__label">
		<span class="Input__labelHeader">{labelText}</span>
		{#if required}
			<input class="Input__labelInput" type={typeOfInput} name={labelFor} bind:value={value} autocomplete={autocomplete} required />
		{:else}
			<input class="Input__labelInput" type={typeOfInput} name={labelFor} bind:value={value} autocomplete={autocomplete} />
		{/if}
		{#if source}
			<img src={source} alt="" class="Input__labelImage" />
		{/if}
	</label>
	{#if error}
		{console.log(error)}
		<p class="Input__labelHeading">{error}</p>
	{/if}

<style>
	.Input__label {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.Input__labelInput {
		all: unset;
		cursor: pointer;
		height: 2rem;
		width: 100%;
		border-bottom: 1px solid black;
	}
</style>
