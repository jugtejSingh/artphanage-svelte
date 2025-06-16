<script lang="ts">
	import {innerWidth} from "svelte/reactivity/window";
	import Image from '$lib/Components/Atoms/Image/Image.svelte';
	import { onMount } from 'svelte';
	interface Props {
		sources: {
			imageLinks: string[];
			imageSource: string[];
		};
		columnInGrids: String
		gap: string;
	}
	let {sources, gap, columnInGrids} :Props = $props()
	const myArray:string[] = $derived(columnInGrids.split(" "));
	let numberOfImages: number = $derived(myArray.length)

	let array2 = $derived.by(() => {
		let array: Array<Array<{imageSource: string, imageLinks: string}>> = [];
		for (let i = 0; i < numberOfImages; i++){
			array.push([])
		}
		let count = 0
		let sourcesValue :number = 0
		while(sources){
			if (sourcesValue === sources.imageSource.length){
				break
			}
			if (count === numberOfImages) {
				count = 0
			}
			array[count].push({imageSource: sources.imageSource[sourcesValue],imageLinks : sources.imageLinks[sourcesValue]})
			sourcesValue++
			count++
		}
		return array
	})

</script>
<div class="Masonary" style:grid-template-columns={columnInGrids} style:gap={gap} >
	{#each array2 as arr}
		<div class="Masonary__column" style:gap={gap}>
			{#each arr as source, index}
				<Image source={source.imageSource} link={"/shop/" + source.imageLinks} />
			{/each}
		</div>
	{/each}
</div>
<style>
	.Masonary {
		margin-left: 10rem;
		margin-right: 10rem;
		margin-top: 2rem;
		display: grid;
	}
	.Masonary__column{
		display: flex;
		flex-direction: column;
	}
</style>