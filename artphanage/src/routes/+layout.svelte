<script>
	import '$lib/styles/global.css';
	import Navbar from '$lib/Components/Organism/Homepage-Organisms/Navbar/Navbar.svelte';

	let {children} = $props()
</script>

{@render children()}
<style>
</style>
