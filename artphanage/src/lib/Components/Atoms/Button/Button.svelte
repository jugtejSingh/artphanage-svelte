<script lang="ts">
	import type { Snippet } from 'svelte';

	interface props {
		variant: 'primary' | 'secondary' | 'ghost'| 'tertiary'
		onclick?: (e: Event) => any | never;
		children?: Snippet;
		type?: 'button' | 'submit' | 'reset';
		link?: string
		flex?: "row" | "column"
	}
	let { variant, onclick, children, type, link, flex}: props = $props();
</script>
	{#if link}
		<a href={link} class="Link" data-variant={variant}>{@render children?.()}</a>
		{:else}
		<button class="Button" type={type} {onclick} data-variant={variant} data-flex="{flex}">{@render children?.()}</button>
		{/if}
<style>
	.Link{
		text-decoration: none;
	}
	.Link[data-variant='primary']{
		color: black;
		font-size: 1.5rem;
	}
	.Button{
		all: unset;
		cursor: pointer;
margin-left: auto;
		margin-right: auto;
		width: var(--width,0);
		height: var(--height,0);
		padding: var(--padding, 0);
		font-size: var(--fontSize,1rem);
	}
	.Button[data-variant='primary'] {
		border: 0;
		cursor: pointer;
		background-color: rgb(240,240,240);
		border-radius: 2rem;
		text-align: center;
	}
	.Button[data-variant='secondary'] {
		background-color: black;
		color: white;
		width: 6rem;
		font-size: 1rem;
		height: 2rem;
		padding: 0.8rem 3rem;
		border-radius: 2rem;
		text-align: center;
	}
	.Button[data-variant='ghost'] {
		all: unset;
		cursor: pointer;
		background-color: transparent;
	}
	.Button[data-variant='tertiary'] {
		background-color: white;
		width: 13rem;
		height: 1.5rem;
		padding: 0.8rem 3rem;
		font-size: 1rem;
		border-radius: 2rem;
		text-align: center;
	}
	.Button[data-flex='row'] {
		display: flex;
		flex-direction: row;
		gap: 10%;
	}
	.Button[data-flex='column'] {
		display: flex;
		flex-direction: column;
		gap: 10%;
	}
</style>