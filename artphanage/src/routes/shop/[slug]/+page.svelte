<script lang="ts">
	import Navbar from '$lib/Components/Organism/Homepage-Organisms/Navbar/Navbar.svelte';
	import ImageList from '$lib/Components/Molecules/ImageList/ImageList.svelte';
	import ProductCardContent from '$lib/Components/Organism/Shop-Organism/ProductPageContent/ProductCardContent.svelte';
	let { data } = $props();
	let mainImage = $state(data.imageName[0]);
	let bigImage = $state();

	function handleClick(source : string){
		mainImage = source
	}
</script>

<Navbar />
<div class="MainContent">
	<div class="MainContent__side">
	<ImageList sources={data.imageName} clickHandler={handleClick}/>
	</div>
	<div class="MainContent__bigImage" bind:this={bigImage}>
		<img src={mainImage} alt="" class="MainContent__bigImageImg"  />
	</div>
	<section class="MainContent__text">
		<ProductCardContent data={data} bigImage={bigImage}/>
	</section>
</div>

<style>
	.MainContent {
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	.MainContent__side{
		width: 10%;
	}
	.MainContent__bigImage{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
		width: 50%;
	}
	.MainContent__bigImageImg{
		width: 60%;
		object-fit: contain;
	}
	.MainContent__text {
		display: flex;
		flex-direction: column;
		align-content: center;
		width: 40%;
	}
</style>
