<script>
  import Navbar from "$lib/Components/Organism/Homepage-Organisms/Navbar/Navbar.svelte";
	import HomepageMainContent from '$lib/Components/Molecules/HomepageMainContent/HomepageMainContent.svelte';
</script>
<Navbar />
<div class="Homepage">
	<HomepageMainContent />
</div>
<style>
.Homepage{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-left: 10rem;
}
</style>