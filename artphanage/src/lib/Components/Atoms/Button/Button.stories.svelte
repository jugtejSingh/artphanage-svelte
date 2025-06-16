<script module lang="js">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';

	const { Story } = defineMeta({
		title: 'atoms/Button',
		component: Button,
		tags: ['autodocs'],
	});
</script>

<Story name="Button4" args={{variant:"shopNow", onclick:{}, text:"Shop Now"}} />
<Story name="Button3" args={{variant:"", onclick:{}, text:"View All"}} />
