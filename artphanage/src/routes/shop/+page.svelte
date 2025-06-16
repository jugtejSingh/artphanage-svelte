<script lang="ts">
	import Navbar from '$lib/Components/Organism/Homepage-Organisms/Navbar/Navbar.svelte';
	import Masonary from '$lib/Components/Organism/Masonary/Masonary.svelte';
	import {innerWidth} from "svelte/reactivity/window";
	import { derived } from 'svelte/store';
	import { never } from 'zod';
	let { data } = $props();
	let sources = { imageSource: [], imageLinks: [] };
	console.log(data)
	for (let i = 0; i < data.products.length; i++) {
		sources.imageSource.push(data.products[i].imageName[0]);
		sources.imageLinks.push(data.products[i].slug);
	}
	const columnInGrids :string = $derived.by(()=>{
		//@ts-expect-error
		if(innerWidth.current <= 700 && innerWidth){
			return "1fr 1fr"
			//@ts-expect-error
		}else if (innerWidth.current <= 1700 && innerWidth.current >= 700) {
			return "1fr 1fr 1fr";
		}
		else{
			return "1fr 1fr 1fr 1fr";
		}
	});

</script>
<Navbar />

	<Masonary
		sources={sources}
		columnInGrids={columnInGrids}
		gap='1rem'
	/>

<style>
</style>
