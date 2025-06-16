<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ImageList from './ImageList.svelte';

	const { Story } = defineMeta({
		title: 'Molecule/ImageList',
		component: ImageList,
		tags: ['autodocs'],
	});
</script>

<Story name="ImageList1" />

