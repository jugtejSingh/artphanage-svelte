<script lang="ts">
	import Input from '$lib/Components/Molecules/Input/Input.svelte';
	import { filesProxy, superForm } from 'sveltekit-superforms';
	import Button from '$lib/Components/Atoms/Button/Button.svelte';
	import { fail } from '@sveltejs/kit';
	import Navbar from '$lib/Components/Organism/Homepage-Organisms/Navbar/Navbar.svelte';
	let { data } = $props();
	let { form, errors, enhance } = superForm(data.form);
	const files = filesProxy(form, 'image');
</script>

<Navbar />
<form method="POST" class="Form" enctype="multipart/form-data" use:enhance>
	<div class="Form__flex">
		<Input
			labelFor="artName"
			labelText="Name of Art"
			types="text"
			bind:value={$form.artName}
			required={true}
			error={$errors.artName}
		/>
		<div class="Form__price">
			<Input
				labelFor="price"
				labelText="Price In USD"
				types="number"
				required={true}
				bind:value={$form.price}
				error={$errors.price}
			/>
		</div>
	</div>
	<div class="Form__flex">
		<Input
			labelFor="size"
			labelText="Size in WxLxH"
			types="text"
			required={true}
			bind:value={$form.size}
			error={$errors.size}
		/>
		<Input
			labelFor="childName"
			labelText="Artist Name"
			types="text"
			required={true}
			bind:value={$form.childName}
			error={$errors.childName}
		/>
	</div>
	<div class="Form__flex">
		<div class="Form__frameAndImages">
			<span>Frame</span>
			<div class="Form__frameOptions">
				<label for="frame">
					<span>Yes</span>
					<input type="radio" value="Yes" id="frame" name="frame" bind:group={$form.frame} />
				</label>
				<label for="frame2">
					<span>No</span>
					<input type="radio" value="No" id="frame2" name="frame" bind:group={$form.frame} />
				</label>
			</div>
			<label class="Form__files">
				Upload your images, In order. Max 4
				<input type="file" id="file" name="image" multiple bind:files={$files} required />
			</label>
		</div>
		<div class="Form__description">
			<label for="description" class="Form__description">
				<span>Description</span>
				<!-- svelte-ignore element_invalid_self_closing_tag-->
				<textarea
					name="description"
					bind:value={$form.description}
					class="Form__descriptionTextarea"
					rows="4"
					required
				/>
			</label>
			{#if $errors.description}
				<span>{$errors.description}</span>
			{/if}
		</div>
	</div>
	<div>
		<Button type="submit" variant="secondary" --width="10%" --height="10%">Submit Now</Button>
	</div>
</form>

<style>
	.Form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 5%;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
		width: 50%;
		gap: 3rem;
		padding: 4%;
		background: rgb(245, 245, 245);
	}
	.Form__flex {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
	.Form__frameAndImages {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}
	.Form__frameOptions {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
	.Form__files {
		margin-top: 2%;
		display: flex;
		flex-direction: column;
	}
	.Form__description {
		height: 100%;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.Form__price{
		display: flex;
		flex-direction: row;
		gap: 5%;
		width: 100%;
	}
</style>
