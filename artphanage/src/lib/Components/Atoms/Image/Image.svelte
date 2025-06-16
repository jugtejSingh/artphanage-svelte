<script lang="ts">
	let { source, link }: { source: string; link: string } = $props();
	let ImageContainer: HTMLDivElement = $state()

</script>
<div class="Image">
		<a href={link} aria-labelledby="ProductLink" >
			<img src={source} alt="" bind:this={ImageContainer} />
		</a>
</div>

<style>
	.Image {
		position: relative;
		width: 100%;
	}
	.Image img {
		opacity: 0;
		width: 100%;
		animation: ContainerAnimation 2s forwards;
	}
	.Image a {
		position: relative;
		width: 100%;
	}
	@keyframes ContainerAnimation {
	0%{
		opacity: 0;
	}
		100%{
			opacity: 1;
		}
	}
</style>
