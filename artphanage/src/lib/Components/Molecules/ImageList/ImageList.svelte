<script>
	let { sources, clickHandler } = $props();
</script>
<div class="ImageList">
{#each sources as source}
	<img src={source} alt="" onmouseenter={()=> clickHandler(source)} class="ImageList__img"/>
	{/each}
</div>
<style>
	.ImageList{
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		margin-top: 2rem;
		margin-left: 2rem;
	}
	.ImageList__img{
		border: 3px solid transparent;
	}
	.ImageList__img:hover{
		border: 3px solid lightblue;
	}
</style>
