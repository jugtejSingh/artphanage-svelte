<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HomepageText from './HomepageText.svelte';

	const { Story } = defineMeta({
		title: 'Molecule/HomepageText',
		component: HomepageText,
		tags: ['autodocs'],
	});
</script>

<Story name="HomepageText1" args={{text:"Art with a passion",className: "text1"}} />

